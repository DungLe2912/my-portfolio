import Link from "next/link"
import Tilt from "react-parallax-tilt"
import Image from "next/image"

import { IProjectProps } from "./types"

const ProjectCard = ({ project }: IProjectProps): JSX.Element => {
  return (
    <div>
      <Tilt className="Tilt cursor-pointer">
        <div
          className="my-4 mx-8 lg:mx-16 rounded-2xl
            transition-all duration-300 transform hover:opacity-80 hover:shadow-violet-5xl"
        >
          <Link href={`/project/${project.slug}`}>
            <Image
              width={800}
              height={800}
              src={project.img}
              alt={project.name}
              className="rounded-2xl"
            />
          </Link>
        </div>
      </Tilt>
    </div>
  )
}

export default ProjectCard
