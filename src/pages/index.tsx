// import dynamic from "next/dynamic"
import { NavBar, SocialBar, Home } from "containers"
import { Footer } from "components"

const HomePage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <SocialBar />
      <Home />
      <Footer />
    </>
  )
}

export default HomePage
