import { useState } from "react"
import { IWork } from "utils/types"

const WORKS_HISTORY: IWork[] = [
  {
    company: "Golden Owl",
    position: "Intern",
    startDate: "May 2020",
    endDate: "September 2020",
    responsibilities: [""],
  },
  {
    company: "Golden Owl",
    position: "Software Engineer",
    startDate: "September 2020",
    responsibilities: [""],
  },
]

export default function Details(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)
  let numbering = 0

  return (
    <>
      <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 place-items-center">
        <div className="col-span-12 sm:col-span-6 flex flex-col ">
          <div className="px-10 py-5">
            {WORKS_HISTORY.map((work, index) => {
              numbering += 1
              return (
                <div key={index}>
                  <h1 className="text-1xl font-black text-white -mb-10 ">0{numbering - 1}</h1>
                  <button
                    className={`${
                      activeIndex === index
                        ? "bg-pink border-transparent"
                        : "border-pink text-white"
                    } border-2 rounded-xl 
                    px-10 py-4 text-center z-30 w-60 lg:w-96
                    transition-all hover:shadow-light-xl 
                    hover:outline-none active:outline-none focus:outline-none`}
                    onClick={() => {
                      setActiveIndex(index)
                    }}
                    type="button"
                  >
                    {work.startDate} - {work?.endDate ? work?.endDate : "Present"}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 flex flex-col justify-center items-center min-h-full">
          {/* <CompanyDetails activeCompany={companyDetails[activeIndex]} /> */}
        </div>
      </div>
    </>
  )
}
