import Link from "next/link"
import Image from "next/image"

import { HeaderSmall } from "components"
import { WORKS } from "utils/constants"

const Works = (): JSX.Element => {
  return (
    <>
      <div className="relative h-auto py-10 lg:py-20">
        <Image
          src="/images/vectors/circle-spin.svg"
          alt="Circle Vector"
          width={100}
          height={100}
          className="absolute -right-16 md:-right-64 top-52 md:top-0 lg:bottom-36 w-1/3 2xl:w-1/3 pointer-events-none animate-spin"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center sm:items-center">
            {/* Hero Header */}
            <div className="items-center w-4/5 sm:w-3/4 relative">
              <Image
                src="/images/vectors/boxes.svg"
                alt="Box Vector"
                width={100}
                height={100}
                className="block absolute right-0 top-0 w-20 md:w-16 lg:w-52 opacity-60"
              />
              <HeaderSmall text="Works" />
              <h1 className="mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-4xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Working at <span className="text-pink font-bold">{WORKS.company}</span> as a
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                {WORKS.role}
              </h1>
              <div className="sm:ml-52 xl:ml-96">
                <Link href="/work">
                  <Image
                    src="/images/vectors/arrows-right.svg"
                    alt="Next"
                    width={100}
                    height={100}
                    className="w-14 mt-10 sm:mt-0 transform-all animate-translateright"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col items-center justify-center">
            <Image
              src={WORKS.logo}
              alt="Works at"
              width={400}
              height={400}
              className="w-full p-14 sm:p-24 md:p-4"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
