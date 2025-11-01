/*
  # Create Contact Enquiries Table

  1. New Tables
    - `contact_enquiries`
      - `id` (uuid, primary key) - Unique identifier for each enquiry
      - `name` (text) - Customer's full name
      - `email` (text) - Customer's email address
      - `phone` (text) - Customer's phone number
      - `service_type` (text) - Type of service requested (Air Freight, Sea Freight, etc.)
      - `message` (text) - Customer's message or enquiry details
      - `language` (text) - Language used when submitting (en/ar)
      - `created_at` (timestamptz) - Timestamp when enquiry was submitted
      - `status` (text) - Status of enquiry (new, contacted, closed)
      - `notes` (text) - Admin notes for CRM
  
  2. Security
    - Enable RLS on `contact_enquiries` table
    - Add policy for public to insert enquiries (form submissions)
    - Add policy for authenticated users to view all enquiries (admin dashboard)
  
  3. Notes
    - Table stores all contact form submissions for CRM tracking
    - Public can only insert (submit forms), not read
    - Only authenticated users can view submissions in admin panel
*/

CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  message text NOT NULL,
  language text DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new',
  notes text DEFAULT ''
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact enquiry"
  ON contact_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all enquiries"
  ON contact_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update enquiries"
  ON contact_enquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);