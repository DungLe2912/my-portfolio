import Landing from "./landing"
import Skills from "./skills"
import Works from "./works"
import Projects from "./project"

const Home = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue pt-28">
        <div className="overflow-x-hidden">
          <Landing />
          <Skills />
          <Works />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default Home
