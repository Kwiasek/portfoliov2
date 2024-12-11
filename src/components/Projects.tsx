import { supabase } from "@/db/supabase";
import Image from "next/image";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Github, ExternalLink } from "lucide-react";

interface ProjectInterface {
  id?: number;
  name: string;
  description: string;
  live_url: string;
  code_url: string;
  image_url: string;
  technologys: string[];
}

export const Projects = async () => {
  const { data: projects, error } = await supabase.from("projects").select("*");
  if (error) {
    return <p>Something went wrong...</p>;
  }
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project: ProjectInterface) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              live_url={project.live_url}
              code_url={project.code_url}
              image_url={project.image_url}
              technologys={project.technologys}
            />
          );
        })}
        {projects?.map((project: ProjectInterface) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              live_url={project.live_url}
              code_url={project.code_url}
              image_url={project.image_url}
              technologys={project.technologys}
            />
          );
        })}
        {projects?.map((project: ProjectInterface) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              live_url={project.live_url}
              code_url={project.code_url}
              image_url={project.image_url}
              technologys={project.technologys}
            />
          );
        })}
      </div>
    </section>
  );
};

const ProjectCard = ({
  name,
  description,
  live_url,
  code_url,
  image_url,
  technologys,
}: ProjectInterface) => {
  return (
    <div className="bg-neutral-900 rounded-xl myShadow overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48">
        <Image
          src={image_url}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologys.map((tech) => (
            <TechnologyTag key={tech} name={tech} />
          ))}
        </div>
        <ProjectLinks code_url={code_url} live_url={live_url} />
      </div>
    </div>
  );
};

const TechnologyTag = ({ name }: { name: string }) => {
  return (
    <span className="px-3 py-1 bg-primary text-black rounded-full text-sm">
      {name}
    </span>
  );
};

const ProjectLinks = ({
  code_url,
  live_url,
}: {
  code_url: string;
  live_url: string;
}) => {
  return (
    <div className="flex gap-4">
      <a
        href={code_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
      >
        <Github size={20} />
        <span>Code</span>
      </a>
      <a
        href={live_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
      >
        <ExternalLink size={20} />
        <span>Live Demo</span>
      </a>
    </div>
  );
};
