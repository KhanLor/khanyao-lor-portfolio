'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Facebook } from 'lucide-react'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:khanyaolor123@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/KhanLor',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/khanyao-lor-157343395/',
      icon: Linkedin,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/khanyao.lor',
      icon: Facebook,
    },
  ]

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerVariants}
        >
          {/* Brand */}
          <motion.div variants={staggerItemVariants}>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Khanyao Lor
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              IT Support & Web Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.li key={link.name} whileHover={{ x: 4 }}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItemVariants}>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label={link.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-slate-200 dark:border-slate-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-center text-slate-600 dark:text-slate-400">
            © {currentYear} Khanyao Lor. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
