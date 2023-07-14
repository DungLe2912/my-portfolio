// import dynamic from "next/dynamic"
import { NavBar, SocialBar, Home } from "containers"

const HomePage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <SocialBar />
      <Home />
    </>
  )
}

export default HomePage
