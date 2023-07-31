const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/connect",
  },
]

const META_DATA = {
  author: "Dung Le",
  url: "https://my-portfolio-dungle2912.vercel.app/",
  title: "Dung Le | Software Developer",
  description: "Dung Le is a Software Developer from Ho Chi Minh City, Vietnam.",
  image_preview:
    "https://res.cloudinary.com/dhqgdzbi0/image/upload/v1687746403/z3553283759181_8a785e5ee57251f870095cc9fa7c3bec_xeir1y.jpg",
  copy_right: "All rights reserved,2023. Dung Le",
}

const SOCIAL_CONTACT = {
  facebook: {
    url: "/images/vectors/facebook.svg",
    link: "https://www.facebook.com/dungle2912/",
    alt: "Facebook info",
  },
  instagram: {
    url: "/images/vectors/instagram.svg",
    link: "",
    alt: "Instagram info",
  },
  email: {
    url: "/images/vectors/email.svg",
    link: "mailto:qdung.le3912@gmail.com",
    alt: "Email info",
  },
  linkedin: {
    url: "/images/vectors/linkedin.svg",
    link: "https://www.linkedin.com/in/le-dung-a19547136/",
    alt: "LinkedIn info",
  },
  github: {
    url: "/images/vectors/github.svg",
    link: "https://github.com/DungLe2912",
    alt: "Github info",
  },
}

const PERSONAL_DETAIL = {
  fullName: "Dung Le",
  about:
    "A Full-stack developer, with more than 3 years of experience working with ReactJS, NextJS, NestJS.",
  resume: "",
  profile_img:
    "https://res.cloudinary.com/dhqgdzbi0/image/upload/v1689231866/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651_546_pveuv0.png",
}

const SKILLS = [
  { name: "HTML", image_url: "/images/skills/html.svg" },
  { name: "CSS", image_url: "/images/skills/css.svg" },
  { name: "JS", image_url: "/images/skills/js.svg" },
  { name: "TS", image_url: "/images/skills/ts.svg" },
  { name: "REACT JS", image_url: "/images/skills/react.svg" },
  { name: "NEXT JS", image_url: "/images/skills/next.svg" },
  { name: "NEST JS", image_url: "/images/skills/nest.svg" },
  { name: "EXPRESS JS", image_url: "/images/skills/express.svg" },
  { name: "GIT", image_url: "/images/skills/git.svg" },
  { name: "FIGMA", image_url: "/images/skills/figma.svg" },
]

const WORKS = [
  {
    name: "Golden Owl",
    role: "Software developer",
    logo_url: "/images/works/go.svg",
  },
]

const PROJECTS = [
  {
    name: "Pace",
    img: "https://res.cloudinary.com/dhqgdzbi0/image/upload/v1690275023/Screen_Shot_2023-07-25_at_15.49.33_djhh7w.png",
    slug: "pace",
  },
]

export { NAV_LINKS, META_DATA, SOCIAL_CONTACT, PERSONAL_DETAIL, SKILLS, WORKS, PROJECTS }
