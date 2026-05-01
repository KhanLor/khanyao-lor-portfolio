'use client'

import { useState } from 'react'
import { hasSupabaseConfig, submitContact } from '@/lib/supabase'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.email.trim()) {
      setError('Email is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return false
    }
    if (!formData.message.trim()) {
      setError('Message is required')
      return false
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!hasSupabaseConfig) {
      setState('error')
      setError('Contact form is currently unavailable until Supabase is configured.')
      return
    }

    if (!validateForm()) {
      setState('error')
      return
    }

    setState('submitting')

    try {
      await submitContact(formData)
      setState('success')
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setState('idle')
      }, 5000)
    } catch (err) {
      console.error('Failed to submit contact form:', err)
      setError('Failed to send message. Please try again later.')
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {state === 'success' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
          <p className="text-green-700 dark:text-green-300">
            Thank you! I&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {state === 'error' && error && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
          <p className="text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={state === 'submitting' || !hasSupabaseConfig}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={state === 'submitting' || !hasSupabaseConfig}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={state === 'submitting' || !hasSupabaseConfig}
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 resize-none transition-colors"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting' || state === 'success' || !hasSupabaseConfig}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        {state === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : !hasSupabaseConfig ? (
          <>
            <AlertCircle size={20} />
            Configure Supabase to Enable Form
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
