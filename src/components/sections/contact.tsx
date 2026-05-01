'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/contact-form'
import Container from '@/components/container'
import { Mail, MapPin, Phone } from 'lucide-react'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

export default function Contact() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'khanyaolor123@gmail.com',
      href: 'mailto:khanyaolor123@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+63 948 618 7359',
      href: 'tel:09486187359',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Davao City, Philippines',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Get in touch and let&apos;s create something amazing together!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          {/* Contact Details */}
          {contactDetails.map((detail) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={detail.title}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow"
                variants={staggerItemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                </motion.div>
                <h3 className="font-semibold mb-2">{detail.title}</h3>
                {detail.href ? (
                  <motion.a
                    href={detail.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {detail.value}
                  </motion.a>
                ) : (
                  <p className="text-slate-600 dark:text-slate-400">{detail.value}</p>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
            whileHover={{ boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)' }}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
