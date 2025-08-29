import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ProjectCard from '@/components/client/ProjectCard'
import AnimatedSection from '@/components/client/AnimatedSection'

export default function Home() {
  const projects = [
    {
      title: 'Dojumbo',
      description: 'A desktop RPG game built with Godot and C#, featuring immersive gameplay and rich storytelling.',
      tech: ['Godot', 'C#', 'Game Development'],
      image: '/dojumbo-preview.png', // You'll need to add this image later
    },
    {
      title: 'iOS Flutter App',
      description: 'Mobile application developed with Flutter and Firebase, showcasing modern app development practices.',
      tech: ['Flutter', 'Dart', 'Firestore'],
      image: '/flutter-app-preview.png', // You'll need to add this image later
    },
    {
      title: 'Full Stack Web App',
      description: 'Web application built with Python backend and React frontend, demonstrating full-stack development capabilities.',
      tech: ['Python', 'React', 'Full Stack'],
      image: '/webapp-preview.png', // You'll need to add this image later
    },
  ]

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <AnimatedSection className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Meolon.dev
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          meolon
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Crafting digital experiences through code and creativity
        </p>
      </AnimatedSection>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Social Links */}
      <AnimatedSection className="text-center" delay={0.5}>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </AnimatedSection>
    </div>
  )
}