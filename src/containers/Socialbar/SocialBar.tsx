/* eslint-disable @next/next/no-img-element */
import { ISocialItem } from "./types"
import { SOCIAL_CONTACT } from "utils/constants"

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
  return (
    <div className="fixed left-3 md:left-5 bottom-0 z-30">
      <div className="flex flex-col  justify-center items-center ">
        {Object.values(SOCIAL_CONTACT).map((item, index) => (
          <SocialIcon key={index} link={item.link} alt_text={item.alt} icon_url={item.url} />
        ))}
        <div className="h-20 md:h-32 mt-2 w-1/12 bg-violet" />
      </div>
    </div>
  )
}

export default SocialBar
