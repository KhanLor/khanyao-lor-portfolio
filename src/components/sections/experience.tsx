'use client'

import { Briefcase, Calendar } from 'lucide-react'
import Container from '@/components/container'

interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  skills: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Web Developer / IT Support Intern',
    company: 'Penong\'s Franchise Corporation',
    period: '2026 - Present',
    description: [
      'Assisted in development and maintenance of web-based systems',
      'Provided IT support for hardware, software, and network issues',
      'Supported POS system operations and troubleshooting',
      'Worked with server and cloud-based system environments',
      'Assisted in inventory system monitoring and updates',
    ],
    skills: ['Web Development', 'System Support', 'POS Systems', 'Networking', 'Cloud Systems'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            My professional journey and contributions to various projects and organizations.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-2xl font-bold mb-8">Technical Proficiencies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Frontend',
                skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
              },
              {
                category: 'Backend',
                skills: ['PHP', 'MySQL', 'PLpgSQL', 'Supabase', 'Node.js'],
              },
              {
                category: 'Tools & Systems',
                skills: ['Git/GitHub', 'Vercel', 'POS Systems', 'Networking Basics', 'Server Administration'],
              },
            ].map((group) => (
              <div key={group.category} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">{group.category}</h4>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ExperienceCard({
  experience,
}: {
  experience: Experience
}) {
  return (
    <div className="group rounded-2xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Briefcase size={22} className="text-white" />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {experience.company}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-slate-500 dark:text-slate-300 text-sm">
              <Calendar size={16} />
              {experience.period}
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.9fr]">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-3">
              Responsibilities
            </h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              {experience.description.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-4">
              Skills Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
