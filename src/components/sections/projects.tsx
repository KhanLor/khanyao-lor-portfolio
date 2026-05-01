'use client'

import Link from 'next/link'
import { ExternalLink, Code2 } from 'lucide-react'
import Container from '@/components/container'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Kamay-Kainan Website',
    description: 'A modern restaurant website with responsive design and user-friendly interface. Features menu display, location information, and reservation capabilities.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PLpgSQL'],
    link: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Smart Waste Tracking System',
    description: 'Real-time waste collection and tracking system with integrated location tracking and reporting features. Built for smart city and environmental monitoring.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Messianic Believer Website',
    description: 'Religion-based informational website focused on responsive design and content presentation. Clean layout with emphasis on readability.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'Penong\'s Inventory System',
    description: 'Inventory management system for stock tracking with product monitoring and basic reporting features. Designed for business operations efficiency.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: '#',
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            A selection of projects I&apos;ve worked on that showcase my skills in web development and system design.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <div
      className={`group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300 ${
        featured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Placeholder Image */}
      <div className="h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
        <Code2
          size={48}
          className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && project.link !== '#' && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm"
          >
            View Project <ExternalLink size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}
