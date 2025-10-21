import { supabase, ReadingItem, SoftwareItem, PromptsItem, DemosItem } from './supabase';

export async function getReadingItems(): Promise<ReadingItem[]> {
  const { data, error } = await supabase
    .from('reading_items')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getSoftwareItems(): Promise<SoftwareItem[]> {
  const { data, error } = await supabase
    .from('software_items')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getPromptsItems(): Promise<PromptsItem[]> {
  const { data, error } = await supabase
    .from('prompts_items')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getDemosItems(): Promise<DemosItem[]> {
  const { data, error } = await supabase
    .from('demos_items')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}
