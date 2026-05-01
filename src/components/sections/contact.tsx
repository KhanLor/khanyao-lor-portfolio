'use client'

import ContactForm from '@/components/contact-form'
import Container from '@/components/container'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Get in touch and let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:khanyaolor123@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
            >
              khanyaolor123@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a
              href="tel:09486187359"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              +63 948 618 7359
            </a>
          </div>

          {/* Location */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Davao City, Philippines
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
