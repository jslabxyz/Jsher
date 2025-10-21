/*
  # Create Showcase Lists Tables

  1. New Tables
    - `reading_items`
      - `id` (uuid, primary key)
      - `title` (text) - Title of the book/article
      - `author` (text) - Author name
      - `description` (text) - Brief description or review
      - `link` (text, nullable) - External link to the resource
      - `status` (text) - Current status: 'reading', 'completed', 'want_to_read'
      - `category` (text, nullable) - Category like 'book', 'article', 'paper'
      - `cover_image_url` (text, nullable) - Cover image URL
      - `is_published` (boolean) - Whether to show publicly
      - `sort_order` (integer) - Manual sorting order
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `software_items`
      - `id` (uuid, primary key)
      - `title` (text) - Name of the software/tool
      - `description` (text) - What it does and why you use it
      - `link` (text, nullable) - Website or download link
      - `category` (text, nullable) - Category like 'productivity', 'design', 'development'
      - `pricing` (text, nullable) - 'free', 'paid', 'freemium'
      - `icon_url` (text, nullable) - Tool icon/logo URL
      - `is_published` (boolean)
      - `sort_order` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `prompts_items`
      - `id` (uuid, primary key)
      - `title` (text) - Prompt title
      - `description` (text) - What the prompt does
      - `prompt_text` (text) - The actual prompt content
      - `use_case` (text, nullable) - When to use this prompt
      - `category` (text, nullable) - Category like 'writing', 'coding', 'analysis'
      - `tags` (text[], nullable) - Array of tags for filtering
      - `is_published` (boolean)
      - `sort_order` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `demos_items`
      - `id` (uuid, primary key)
      - `title` (text) - Demo name
      - `description` (text) - What the demo showcases
      - `link` (text, nullable) - Live demo or repository link
      - `thumbnail_url` (text, nullable) - Preview image
      - `technologies` (text[], nullable) - Array of technologies used
      - `category` (text, nullable) - Category like 'web', 'mobile', 'automation'
      - `is_published` (boolean)
      - `sort_order` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to published items
    - Future admin policies can be added when authentication is implemented

  3. Indexes
    - Add indexes on is_published and sort_order for performance
*/

-- Create reading_items table
CREATE TABLE IF NOT EXISTS reading_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text NOT NULL,
  description text NOT NULL,
  link text,
  status text DEFAULT 'want_to_read' CHECK (status IN ('reading', 'completed', 'want_to_read')),
  category text,
  cover_image_url text,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create software_items table
CREATE TABLE IF NOT EXISTS software_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  link text,
  category text,
  pricing text,
  icon_url text,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create prompts_items table
CREATE TABLE IF NOT EXISTS prompts_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  prompt_text text NOT NULL,
  use_case text,
  category text,
  tags text[],
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create demos_items table
CREATE TABLE IF NOT EXISTS demos_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  link text,
  thumbnail_url text,
  technologies text[],
  category text,
  is_published boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE reading_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE software_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE prompts_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE demos_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published items
CREATE POLICY "Public can view published reading items"
  ON reading_items FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view published software items"
  ON software_items FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view published prompts items"
  ON prompts_items FOR SELECT
  USING (is_published = true);

CREATE POLICY "Public can view published demos items"
  ON demos_items FOR SELECT
  USING (is_published = true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reading_items_published_sort 
  ON reading_items(is_published, sort_order);

CREATE INDEX IF NOT EXISTS idx_software_items_published_sort 
  ON software_items(is_published, sort_order);

CREATE INDEX IF NOT EXISTS idx_prompts_items_published_sort 
  ON prompts_items(is_published, sort_order);

CREATE INDEX IF NOT EXISTS idx_demos_items_published_sort 
  ON demos_items(is_published, sort_order);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers to auto-update updated_at
CREATE TRIGGER update_reading_items_updated_at BEFORE UPDATE ON reading_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_software_items_updated_at BEFORE UPDATE ON software_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_prompts_items_updated_at BEFORE UPDATE ON prompts_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_demos_items_updated_at BEFORE UPDATE ON demos_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
