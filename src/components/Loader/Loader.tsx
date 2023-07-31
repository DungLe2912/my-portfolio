import { Player } from "@lottiefiles/react-lottie-player"

export default function Loader(): JSX.Element {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue">
        <hr className="w-2/5 absolute left-auto top-3/4" />
        <Player
          src="https://lottie.host/587f9324-faef-4378-b590-9e09e804e580/h9IGractc5.json"
          className="player"
          loop
          autoplay
          speed={2}
          style={{ height: "580px", width: "580px" }}
        />
      </div>
    </>
  )
}
