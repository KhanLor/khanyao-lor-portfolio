'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Container from '@/components/container'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center py-12">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Khanyao Lor
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
            IT Support & Web Developer
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8 leading-relaxed">
            Crafting modern web applications and providing IT solutions. Based in Davao City, Philippines. Specialized in building responsive websites, managing databases, and supporting IT infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-50 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-600 dark:text-slate-400 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Davao City, Philippines</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              <a
                href="mailto:khanyaolor123@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                khanyaolor123@gmail.com
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="text-slate-400 dark:text-slate-600" size={32} />
          </div>
        </div>
      </Container>

      {/* Add animation styles */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
