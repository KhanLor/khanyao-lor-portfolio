import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  imageUrl?: string
  featured?: boolean
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

// Projects functions
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as Project[]
}

// Contact form submission
export async function submitContact(data: {
  name: string
  email: string
  message: string
}) {
  const { data: result, error } = await supabase
    .from('contact_messages')
    .insert([
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    ])
    .select()

  if (error) throw error
  return result
}
