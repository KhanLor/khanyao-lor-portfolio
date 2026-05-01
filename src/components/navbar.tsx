'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { slideInFromTopVariants, staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const rightNavItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  if (!mounted) return null

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={slideInFromTopVariants}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Khanyao
            </Link>
          </motion.div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Right Navigation Items */}
            <motion.div
              className="hidden md:flex items-center gap-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
            >
              {rightNavItems.map((item) => (
                <motion.div key={item.href} variants={staggerItemVariants}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${
            isOpen ? 'pb-4 border-t border-slate-200 dark:border-slate-800' : ''
          }`}
        >
          {rightNavItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="block px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
