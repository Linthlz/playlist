// src/services/api.js

const API_BASE = 'http://127.0.0.1:5000/api';

class ApiService {
  constructor() {
    this.isRefreshing = false;
    this.failedQueue = [];
  }

  processQueue = (error, token = null) => {
    this.failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    this.failedQueue = [];
  };

  async _fetch(url, options = {}) {
    const token = localStorage.getItem('access_token');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_BASE}${url}`, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        localStorage.clear();
        window.location.href = '/';
        throw new Error("Session expired. Please login again.");
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('API FETCH ERROR:', error);
      throw error;
    }
  }

  // --- AUTH ---
  async login(username, password) {
    const data = await this._fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (data.token) {
      localStorage.setItem('access_token', data.token);
    }

    return data;
  }

  async register(username, password, email, name) {
    return this._fetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, email, name }),
    });
  }

  async getUserProfile() {
    return this._fetch('/protected/user');
  }

  // --- PLAYLIST ---
  async fetchPlaylists() {
    return this._fetch('/playlist/');
  }

  async createPlaylist(formData) {
    return this._fetch('/playlist/upload', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  async updatePlaylist(id, formData) {
    return this._fetch(`/playlist/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
    });
  }

  async deletePlaylist(id) {
    return this._fetch(`/playlist/delete/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
