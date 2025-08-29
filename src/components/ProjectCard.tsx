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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-primary-900/50 via-secondary-900/50 to-accent-900/50 
                 rounded-xl overflow-hidden card-hover backdrop-blur-sm"
    >
      <div className="aspect-video relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent z-10" />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 gradient-text">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-primary-800/30 text-primary-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
