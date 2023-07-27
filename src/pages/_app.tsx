import { useEffect, useState } from "react"
import Head from "next/head"
import { AnimatePresence, motion } from "framer-motion"

import type { AppProps } from "next/app"
import { META_DATA } from "utils/constants"

import "../styles/globals.css"
import { Loader } from "components"

const { author, url, title, description, image_preview, copy_right } = META_DATA

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  }

  return (
    <div>
      <Head>
        <title>Dung Le | Software Developer</title>
        <meta name="title" content="Dung Le | Software Developer" />
        <meta charSet="utf-8" />
        {/* PWA primary color */}
        <meta name="theme-color" content="black" />
        <meta name="description" content={`Portfolio of ${author}`} />
        <meta
          name="keywords"
          content={"Portfolio " + author + " skills projects experience resume"}
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content={author} />
        <meta name="copyright" content={copy_right} />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image_preview} />
        {/* Use Billboard to get an OG Image */}
        <meta property="twitter:image" content={image_preview} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container"
            >
              {/* <CustomCursor /> */}
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  )
}
