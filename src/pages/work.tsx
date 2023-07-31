import { NavBar, SocialBar, WorkPage } from "containers"
import { Footer } from "components"

const HomePage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <SocialBar />
      <WorkPage />
      <Footer />
    </>
  )
}

export default HomePage
