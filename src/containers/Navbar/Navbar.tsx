/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Menu } from "react-feather"

import { NAV_LINKS } from "utils/constants"
// import { PersonalDetails } from "utils/types"
// import { PersonalDetailsContext } from "utils/contexts"

import { INavbarItemProps } from "./types"

const NavItem = ({ href, title }: INavbarItemProps): JSX.Element => {
  const router = useRouter()
  return (
    <Link href={href} legacyBehavior>
      <a>
        <li
          className={`
          px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
          ${router.asPath === href ? "border-b-2 md:border-none" : ""} 
          `}
        >
          <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
            {title}
          </p>
          <img
            src="/images/vectors/nav_active.svg"
            alt="nav-active"
            className={`
            hidden md:block md:opacity-0
            ${router.asPath === href && "md:opacity-100 md:w-100"}
            `}
          />
        </li>
      </a>
    </Link>
  )
}

const Navbar = (): JSX.Element => {
  //   const personalDetails: PersonalDetails | undefined = useContext(PersonalDetailsContext)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [isScreenScrolled, setisScreenScrolled] = useState(false)
  const addShadowtoNav = () => {
    window.scrollY >= 100 ? setisScreenScrolled(true) : setisScreenScrolled(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", addShadowtoNav)
    return () => {
      window.removeEventListener("scroll", addShadowtoNav)
    }
  }, [])

  return (
    <div
      className={` mx-auto bg-blue w-full fixed z-30
      ${isScreenScrolled && "shadow-2xl"}
      `}
    >
      <nav className="block md:flex justify-between items-center p-2 px-8">
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dhqgdzbi0/image/upload/v1687839377/cc0dfcee4d934b1a97ec18d3ab0c40e9__2_-removebg-preview_ud4kqz.png"
                alt="logo"
                className={`${
                  isScreenScrolled ? "w-1/5 md:w-3/12" : "w-16 md:w-2/5"
                } pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer`}
              />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? "block pt-3 transition-all" : "hidden md:block"}>
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {NAV_LINKS.map((item) => {
              return <NavItem title={item.title} href={item.href} key={item.href} />
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
