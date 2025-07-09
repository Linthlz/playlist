import { UtensilsCrossed, Coffee, Wine, Salad, Menu, MoreHorizontal } from 'lucide-react';

export const GROUP_ID = 36;
// export const API_BASE = 'https://webfmsi.singapoly.com/api/playlist';
export const API_BASE = 'http://localhost:5000/api';

export const GENRES = ['fastfood', 'cafe', 'fine-dining', 'streetfood'];

export const GENRE_ICONS = {
  fastfood: UtensilsCrossed,
  cafe: Coffee,
  'fine-dining': Wine,
  streetfood: Salad
};

export const NAV_ITEMS = [
  { id: 'all', label: 'All', icon: Menu },
  { id: 'fastfood', label: 'Fast Food', icon: UtensilsCrossed },
  { id: 'cafe', label: 'Cafe', icon: Coffee },
  { id: 'fine-dining', label: 'Fine Dining', icon: Wine },
  { id: 'streetfood', label: 'Street Food', icon: Salad },
  { id: 'others', label: 'Others', icon: MoreHorizontal } // optional jika masih dibutuhkan
];

export const INITIAL_FORM_DATA = {
  play_name: '',
  play_url: '',
  play_thumbnail: '',
  play_genre: 'fastfood',
  play_description: ''
};
