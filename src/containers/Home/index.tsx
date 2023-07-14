import Landing from "./landing"
import Skills from "./skills"
import Works from "./works"

const Home = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Works />
        </div>
      </div>
    </>
  )
}

export default Home
