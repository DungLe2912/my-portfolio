import { IWork } from "utils/types"

type Props = {
  activeWork: IWork
}

export default function CompanyDetails({ activeWork }: Props): JSX.Element {
  return (
    <>
      <div className="bg-violet rounded-2xl px-10 py-10 w-60 sm:w-72 mx-16 sm:mx-16 md:mx-32 md:w-80 lg4:w-96 xl:min-w-full xl:min-h-full">
        <p className="font-bold mb-2 text-7xl lg:text-6xl cursor-auto">{activeWork.company}</p>
        <p className="mb-1 text-lg">{activeWork.position}</p>
        <p className="italic text-sm lg:text-7xl">
          {activeWork.startDate} - {activeWork?.endDate ? activeWork?.endDate : "Present"}
        </p>
        <ul className="text-sm lg:text-7xl mt-8 list-disc ml-5 z-30 cursor-auto">
          {activeWork.responsibilities.map((r) => {
            return <li key={r}>{r}</li>
          })}
        </ul>
      </div>
    </>
  )
}
