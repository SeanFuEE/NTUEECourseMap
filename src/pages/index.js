import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import Search from "../components/Search"
import { useEffect, useState } from "react"

export default function IndexPage() {
  var [keyword, setKeyword] = useState("")
  return (
    <Layout page="home" bgColor="inherit">
      <Search inputKeyword={setKeyword} />
      <section>
        <BlogList keyword={keyword} />
      </section>
    </Layout>
  )
}
