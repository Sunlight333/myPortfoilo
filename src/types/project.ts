/**
 * @fileoverview Type definitions for project-related data structures
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  tags: string[];
  code: string;
  liveDemo?: string;
  category: string;
  featured: boolean;
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
  };
  features: string[];
  challenges: string[];
  results: string[];
  duration: string;
  teamSize: number;
  role: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}
