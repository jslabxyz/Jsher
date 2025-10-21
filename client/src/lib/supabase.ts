import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ReadingItem = {
  id: string;
  title: string;
  author: string;
  description: string;
  link: string | null;
  status: 'reading' | 'completed' | 'want_to_read';
  category: string | null;
  cover_image_url: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type SoftwareItem = {
  id: string;
  title: string;
  description: string;
  link: string | null;
  category: string | null;
  pricing: string | null;
  icon_url: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type PromptsItem = {
  id: string;
  title: string;
  description: string;
  prompt_text: string;
  use_case: string | null;
  category: string | null;
  tags: string[] | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};

export type DemosItem = {
  id: string;
  title: string;
  description: string;
  link: string | null;
  thumbnail_url: string | null;
  technologies: string[] | null;
  category: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
};
