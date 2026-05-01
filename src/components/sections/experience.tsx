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
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            My professional journey and contributions to various projects and organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} isLast={index === experiences.length - 1} />
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
  isLast,
}: {
  experience: Experience
  isLast: boolean
}) {
  return (
    <div className="relative">
      {/* Timeline Dot and Line */}
      <div className="absolute left-0 top-0 w-10 h-10 -translate-x-5">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
          <Briefcase size={20} className="text-white" />
        </div>
      </div>

      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-0 top-10 bottom-0 w-0.5 -translate-x-4.5 bg-gradient-to-b from-blue-600 to-purple-600" />
      )}

      {/* Content Card */}
      <div className="ml-16 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
            {experience.company}
          </p>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
            <Calendar size={16} />
            {experience.period}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-6">
          {experience.description.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
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
  )
}
