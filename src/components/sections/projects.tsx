'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Code2, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Container from '@/components/container'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  imageSrc?: string
  featured: boolean
  carouselImages?: { src: string; alt: string }[]
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Kamay-Kainan Website',
    description: 'A modern restaurant website with responsive design and user-friendly interface. Features menu display, location information, and reservation capabilities.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PLpgSQL'],
    link: 'https://kamay-kainan.vercel.app/',
    imageSrc: '/KAMAY%20KAINAN.png',
    featured: true,
  },
  {
    id: '2',
    title: 'Smart Waste Tracking System',
    description: 'Real-time waste collection and tracking system with integrated location tracking and reporting features. Built for smart city and environmental monitoring.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: '#',
    imageSrc: '/SMART%20WASTE.png',
    featured: true,
    carouselImages: [
      { src: '/SMART%20WASTE1.png', alt: 'Smart Waste System View 1' },
      { src: '/SMART%20WASTE2.png', alt: 'Smart Waste System View 2' },
      { src: '/SMART%20WASTE3.png', alt: 'Smart Waste System View 3' },
      { src: '/SMART%20WASTE4.png', alt: 'Smart Waste System View 4' },
    ],
  },
  {
    id: '3',
    title: 'Messianic Believer Website',
    description: 'Religion-based informational website focused on responsive design and content presentation. Clean layout with emphasis on readability.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: 'https://messiahnicbeliever.ct.ws/index.php',
    imageSrc: '/MESSIAHNIC.png',
    featured: false,
  },
  {
    id: '4',
    title: 'Penong\'s Inventory System',
    description: 'Inventory management system for stock tracking with product monitoring and basic reporting features. Designed for business operations efficiency.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    link: 'https://penongsinventory.ct.ws/index.php',
    imageSrc: '/PENONGS1.png',
    featured: false,
  },
]

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  const selectedProject = projects.find((p) => p.id === selectedProjectId)

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
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured 
              onCardClick={project.carouselImages ? () => setSelectedProjectId(project.id) : undefined}
            />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onCardClick={project.carouselImages ? () => setSelectedProjectId(project.id) : undefined}
                />
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Smart Waste Modal */}
      {selectedProject?.carouselImages && (
        <SmartWasteModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  )
}

function ProjectCard({
  project,
  featured = false,
  onCardClick,
}: {
  project: Project
  featured?: boolean
  onCardClick?: () => void
}) {
  const cardClasses = `group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${
    featured ? 'md:col-span-1' : ''
  }`

  const content = (
    <>
      <div className="h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors overflow-hidden">
        {project.imageSrc ? (
          <div className="relative h-full w-full">
            <Image
              src={project.imageSrc}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
        ) : project.carouselImages ? (
          <div className="relative h-full w-full">
            <Image
              src={project.carouselImages[0].src}
              alt={project.carouselImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
        ) : (
          <Code2
            size={48}
            className="text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors"
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

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

        {project.link && project.link !== '#' && (
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
            Visit Site <ExternalLink size={16} />
          </span>
        )}
        {project.carouselImages && (
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
            View Details <ExternalLink size={16} />
          </span>
        )}
      </div>
    </>
  )

  return onCardClick ? (
    <div onClick={onCardClick} className={cardClasses}>
      {content}
    </div>
  ) : project.link && project.link !== '#' ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      {content}
    </a>
  ) : (
    <div className={cardClasses}>{content}</div>
  )
}

function SmartWasteModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = project.carouselImages || []

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Carousel */}
        <div className="p-6">
          <div className="relative mb-6">
            <div className="relative h-96 bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-full p-2 transition-colors z-10"
                >
                  <ChevronLeft size={24} className="text-slate-900 dark:text-white" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 rounded-full p-2 transition-colors z-10"
                >
                  <ChevronRight size={24} className="text-slate-900 dark:text-white" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
              Overview
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {project.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 ${
                    currentIndex === index
                      ? 'border-blue-500'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
