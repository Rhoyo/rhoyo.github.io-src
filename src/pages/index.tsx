import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header/>
      test
      <Footer/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
