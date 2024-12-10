import { supabase } from "@/db/supabase";
import Image from "next/image";
import React from "react";
import { SectionHeader } from "./SectionHeader";

interface ProjectInterface {
  id?: number;
  name: string;
  description: string;
  live_url: string;
  code_url: string;
  image_url: string;
}

export const Projects = async () => {
  const { data: projects, error } = await supabase.from("projects").select("*");
  if (error) {
    return <p>Something went wrong...</p>;
  }
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="flex flex-wrap justify-center md:justify-between items-start gap-8">
        {projects?.map((project: ProjectInterface) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              live_url={project.description}
              code_url={project.code_url}
              image_url={project.image_url}
            />
          );
        })}
        {projects?.map((project: ProjectInterface) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              live_url={project.description}
              code_url={project.code_url}
              image_url={project.image_url}
            />
          );
        })}
        {projects?.map((project: ProjectInterface) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              live_url={project.description}
              code_url={project.code_url}
              image_url={project.image_url}
            />
          );
        })}
      </div>
    </section>
  );
};

const Project = ({
  name,
  description,
  live_url,
  code_url,
  image_url,
}: ProjectInterface) => {
  return (
    <div className="flex flex-col border border-white myShadow p-5 rounded-xl gap-5 min-w-[250px] max-w-[500px]">
      <h3 className="text-xl font-bold">{name}</h3>
      <Image
        src={image_url}
        alt={name}
        className="w-auto rounded-xl"
        width={1497}
        height={935}
      />
      <p className="tracking-wide">{description}</p>
      <div className="flex justify-between">
        <Button primary href={live_url}>
          Open Live
        </Button>
        <Button href={code_url}>Open Code</Button>
      </div>
    </div>
  );
};

const Button = ({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) => {
  return (
    <a
      href={href}
      className={`px-3 py-2 text-lg rounded-lg ${
        primary ? "bg-primary text-slate-900" : "border border-primary"
      }`}
    >
      {children}
    </a>
  );
};
