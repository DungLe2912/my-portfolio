import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import { Button, TextCard, ProjectCard, HeaderSmall } from "components"
import { PROJECTS } from "utils/constants"

interface IProject {
  name: string
  img: string
  slug: string
}

export default function Projects(): JSX.Element {
  const router = useRouter()
  return (
    <>
      <div>
        <div className="relative h-auto py-10 lg:py-20">
          <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
              {/* Hero Header */}
              <div className="items-center w-3/4 relative">
                <Image
                  src="/images/vectors/boxes.svg"
                  alt="Box Vector"
                  width={100}
                  height={100}
                  className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
                />
                <HeaderSmall text="Let’s walk the talk!" />
                {/* TODO Add dynamic taglines */}

                <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                  Some awesome <span className="text-pink font-bold">products</span> for the awesome
                  people
                </h1>
                <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                  Something he has <span className="text-pink font-bold">built.</span>
                </h1>
                <div className="sm:ml-52 xl:ml-96 transform rotate-90">
                  <Link href="#projects">
                    <Image
                      src="/images/vectors/arrows-right.svg"
                      alt="Next"
                      width={100}
                      height={100}
                      className="hidden lg:block w-14 lg:mt-24 xl:mt-16 sm:mt-0 transform-all animate-translateright "
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* FIXME Make thie cards of this page dyanmic */}
            <div className="relative col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCard
                  heading="Websites"
                  text=" He adds certain special hidden recipes and making his websites look enticing."
                  color="violet"
                />
              </div>
              <div className="w-64 h-auto my-4 sm:ml-40 sm:-my-6 lg:ml-60 lg:-my-10 shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110 z-auto">
                <TextCard
                  heading="Apps"
                  text="The art of creating some awesome smartphone applications using React Native."
                  color="pink"
                />
              </div>
              <div className="w-64 h-auto shadow-light-xl hover:shadow-light-3xl transform transition-all duration-300 hover:scale-110">
                <TextCard
                  heading="UI/UX"
                  text="He uses his outstanding engineering abilities to provide users an awesome interface and experience"
                  color="violet"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-auto sm:h-auto md:h-auto ml-4 sm:mx-12 md:mx-16" id="projects">
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            {PROJECTS.map((project: IProject) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
          <div className="flex justify-center mt-10 lg:mt-4">
            <Button
              type="solid"
              text="Show me more! 🔥"
              onClickHandler={() => router.push("/projects")}
            />
          </div>
        </div>
      </div>
    </>
  )
}
