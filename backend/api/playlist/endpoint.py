from flask import Blueprint, request, jsonify
from database.database import get_connection
import mysql.connector
from api.auth.endpoint import token_required  # Adjust the import path accordingly

playlist_endpoints = Blueprint('playlist_endpoints', __name__)

# GET all playlists for current user
@playlist_endpoints.route('/', methods=['GET'])
@token_required
def get_all_playlists(current_user):
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM playlists WHERE user_id = %s", (current_user['id'],))
        playlists = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(playlists), 200
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500

# GET one playlist by ID (only if owned by user)
@playlist_endpoints.route('/<int:playlist_id>', methods=['GET'])
@token_required
def get_playlist(current_user, playlist_id):
    try:
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM playlists WHERE id = %s AND user_id = %s", (playlist_id, current_user['id']))
        playlist = cursor.fetchone()
        cursor.close()
        conn.close()
        if playlist:
            return jsonify(playlist), 200
        return jsonify({"msg": "Playlist not found"}), 404
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500

# CREATE playlist
@playlist_endpoints.route('/upload', methods=['POST'])
@token_required
def create_playlist(current_user):
    data = request.get_json()
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO playlists (play_name, play_url, play_thumbnail, play_genre, play_description, user_id)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (
            data['play_name'],
            data.get('play_url'),
            data.get('play_thumbnail'),
            data['play_genre'],
            data.get('play_description'),
            current_user['id']  # ✅ Link to logged-in user
        ))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"msg": "Playlist created"}), 201
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500

# UPDATE playlist (only if owned by user)
@playlist_endpoints.route('/update/<int:playlist_id>', methods=['PUT'])
@token_required
def update_playlist(current_user, playlist_id):
    data = request.get_json()
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE playlists
            SET play_name = %s, play_url = %s, play_thumbnail = %s,
                play_genre = %s, play_description = %s
            WHERE id = %s AND user_id = %s
        """, (
            data.get('play_name'),
            data.get('play_url'),
            data.get('play_thumbnail'),
            data.get('play_genre'),
            data.get('play_description'),
            playlist_id,
            current_user['id']
        ))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"msg": "Playlist updated"}), 200
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500

# DELETE playlist (only if owned by user)
@playlist_endpoints.route('/delete/<int:playlist_id>', methods=['DELETE'])
@token_required
def delete_playlist(current_user, playlist_id):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM playlists WHERE id = %s AND user_id = %s", (playlist_id, current_user['id']))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"msg": "Playlist deleted"}), 200
    except mysql.connector.Error as e:
        return jsonify({"error": str(e)}), 500
