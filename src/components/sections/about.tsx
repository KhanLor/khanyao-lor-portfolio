'use client'

import Image from 'next/image'
import { Download, FileText } from 'lucide-react'
import Container from '@/components/container'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m an IT Support and Web Developer with hands-on experience in system development, technical support, and web-based applications. My journey combines academic knowledge with real-world industry exposure.
              </p>
              <p>
                My expertise spans across building responsive websites, managing databases, and supporting IT infrastructure including POS systems, networking, and cloud-based platforms. I&apos;m passionate about solving problems and creating digital solutions that make a difference.
              </p>
              <p>
                Currently, I&apos;m a Web Developer and IT Support Intern at Penong&apos;s Franchise Corporation, where I assist in developing and maintaining web-based systems while providing comprehensive IT support.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'PHP',
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'HTML/CSS',
                  'Tailwind CSS',
                  'MySQL',
                  'Supabase',
                  'Git/GitHub',
                  'System Support',
                  'Networking',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/Khanyao_Lor_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <FileText size={20} />
                View Resume
              </a>
              <a
                href="/Khanyao_Lor_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20" />
            <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
              <div className="aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-xl shadow-slate-400/20 dark:shadow-black/30">
                <Image
                  src="/2x2%20id.png"
                  alt="Khanyao Lor 2x2 ID"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-semibold mb-2">
              Bachelor of Science in Information Technology
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              St. John Paul II College of Davao
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">2022 - 2026</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
