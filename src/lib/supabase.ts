import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey)

export const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null

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
  if (!supabase) {
    throw new Error('Missing Supabase configuration')
  }

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
  if (!supabase) {
    throw new Error('Missing Supabase configuration')
  }

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
