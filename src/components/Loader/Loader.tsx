import { Player } from "@lottiefiles/react-lottie-player"

export default function Loader(): JSX.Element {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue transition-all">
        <hr className="transition-all animate-changewidth duration-1000 absolute left-0 top-1/2" />
        <Player
          src="https://lottie.host/2411b745-a693-4a14-b63c-0ed07c81e56c/1MAL414q3F.json"
          className="player"
          loop
          autoplay
          speed={10}
        />
        <hr className="transition-all animate-changewidth duration-1000 absolute right-0 top-1/2" />
      </div>
    </>
  )
}
