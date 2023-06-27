import { Html, Head, Main, NextScript } from "next/document"

import data from "../../data.json"
const { name } = data

export default function Document() {
  return (
    <Html lang="en" style={{ msOverflowX: "hidden" }}>
      <Head>
        <meta charSet="utf-8" />
        {/* PWA primary color */}
        <meta name="theme-color" content="black" />
        <meta name="description" content={`Portfolio of ${name}`} />
        <meta
          name="keywords"
          content={"Portfolio " + name + " skills projects experience resume"}
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Dung Le" />
        <meta name="copyright" content="All rights reserved,2023. Dung Le" />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-portfolio-dungle2912.vercel.app/" />
        <meta property="og:title" content="Dung Le | Software Developer" />
        <meta
          property="og:description"
          content="Dung Le is a Software Developer from Ho Chi Minh City, Vietnam."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dhqgdzbi0/image/upload/v1687746403/z3553283759181_8a785e5ee57251f870095cc9fa7c3bec_xeir1y.jpg"
        />
        {/* Use Billboard to get an OG Image */}
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dhqgdzbi0/image/upload/v1687746403/z3553283759181_8a785e5ee57251f870095cc9fa7c3bec_xeir1y.jpg"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
