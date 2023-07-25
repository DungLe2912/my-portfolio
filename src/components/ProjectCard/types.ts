interface Project {
  slug: string
  tagline?: string
  description?: string
  img: string
  name: string
  tags?: string[]
  github?: string
  category?: string[]
  featured?: boolean
  launch_video?: string
  url?: string
}

export interface IProjectProps {
  project: Project
}
