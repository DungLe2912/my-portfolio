/* eslint-disable @next/next/no-img-element */
import { ISocialItem } from "./types"
// import {}
const SocialIcon = ({ link, alt_text, icon_url }: ISocialItem): JSX.Element => {
  return (
    <a href={link}>
      <img
        src={icon_url}
        alt={alt_text}
        className="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75"
      />
    </a>
  )
}

const SocialBar = (): JSX.Element => {
  return <></>
}

export default SocialBar
