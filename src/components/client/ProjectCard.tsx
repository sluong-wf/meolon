'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    image: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50 transform hover:-translate-y-2"
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-30">
          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-900 border border-gray-200">
            Project
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
