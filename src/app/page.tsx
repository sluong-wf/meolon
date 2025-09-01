'use client'

import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import ProjectCard from '@/components/client/ProjectCard'
import AnimatedSection from '@/components/client/AnimatedSection'

export default function Home() {
  const projects = [
    {
      title: 'Dojumbo',
      description: 'A desktop RPG game built with Godot and C#, featuring immersive gameplay and rich storytelling.',
      tech: ['Godot', 'C#', 'Game Development'],
      image: '/globe.svg',
    },
    {
      title: 'iOS Flutter App',
      description: 'Mobile application developed with Flutter and Firebase, showcasing modern app development practices.',
      tech: ['Flutter', 'Dart', 'Firestore'],
      image: '/file.svg',
    },
    {
      title: 'Full Stack Web App',
      description: 'Web application built with Python backend and React frontend, demonstrating full-stack development capabilities.',
      tech: ['Python', 'React', 'Full Stack'],
      image: '/window.svg',
    },
  ]

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Full Page Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text tracking-tight">
              Meolon.dev
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4 tracking-wide">
              Software Developer
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mb-12">
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Crafting elegant digital experiences through innovative code and creative problem-solving
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-indigo-200"
              >
                View My Work
              </button>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sluong-wf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-gray-300 shadow-sm"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shayla-luong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-full transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-gray-300 shadow-sm"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection delay={0.8} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToProjects}
            className="animate-bounce text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            <FaArrowDown className="w-6 h-6" />
          </button>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-indigo-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects showcasing my journey in software development
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Contact CTA */}
          <AnimatedSection delay={0.3} className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something Together
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Feel free to reach out!
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:your-email@example.com"
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Get In Touch
                </a>
                <a
                  href="https://github.com/sluong-wf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/30 hover:border-white text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}