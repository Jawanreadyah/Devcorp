import React from 'react';
import AudioPlayer, { AudioPlayerProvider } from './ui/audio-player';

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  audioSrc?: string;
}

function ProjectCard({ image, title, subtitle, description, audioSrc }: ProjectCardProps) {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
          <div className="text-white">
            <h3 className="text-2xl font-medium">{title}</h3>
            <p className="mt-2">{subtitle}</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-zinc-600">{description}</p>
      {/* No audio player for this card */}
    </div>
  );
}

export function Work() {
  return (
    <AudioPlayerProvider>
      <section id="work" className="mt-48">
        <div className="border-t border-black pt-8">
          <span className="text-sm text-zinc-600 uppercase">SELECTED PROJECTS</span>
          <div className="flex items-baseline gap-12">
            <h2 className="text-[5rem] font-medium leading-none mt-12">Our Work</h2>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <ProjectCard 
              image="https://i.imghippo.com/files/eIC6158lM.png"
              title="Zeal it events landing page"
              subtitle="UX/UI Design, Development"
              description="A comprehensive digital transformation project focusing on user experience and accessibility for Qatar's Leading Event Management Company."
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              title="Marza Hypermarket"
              subtitle="E-commerce, Retail, Branding"
              description="A modern e-commerce platform for Marza Hypermarket, featuring seamless shopping experience, product catalog, and brand-focused design."
            />
          </div>
        </div>
      </section>
    </AudioPlayerProvider>
  );
}