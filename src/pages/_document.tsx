import { Head, Html, Main, NextScript } from "next/document"

import { META_DATA } from "utils/constants"

export default function Document() {
  return (
    <Html lang="en" style={{ msOverflowX: "hidden" }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
