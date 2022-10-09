import React, { useState } from "react"
import * as ReactDOM from "react-dom"

import TextField from "@mui/material/TextField"
import useBlogData from "../../static_queries/useBlogData"
let data = [
  "計算機程式",
  "電路學",
  "交換電路與邏輯設計",
  "計算機程式設計實驗",
  "電路學實驗",
  "微積分1",
  "微積分2",
  "微積分3",
]

export default function Searchbar(props) {
  const blogData = useBlogData()
  const validBlogData = blogData.filter(
    (blog) => blog.node.frontmatter.title !== ""
  )
  const titles = validBlogData.map((blog) => blog.node.frontmatter.title)
  console.log(titles)
  var [inputText, setInputText] = useState("")

  const handleChange = (event) => {
    if (event.code === "Enter") {
      props.inputKeyword(event.target.value)
      setInputText(event.target.value)
    }
  }

  const filterList = () => {
    var updatedList = titles.filter((item) => {
      return item.toLowerCase().indexOf(inputText?.toLowerCase()) !== -1
    })
    let data_filter = updatedList.map((item, index, array) => {
      return (
        <li className="list-group-item" data-category={item} key={index}>
          {item}
        </li>
      )
    })
    return data_filter
  }

  return (
    <div>
      <TextField
        label="search"
        variant="outlined"
        className="form-control form-control-lg"
        placeholder="Search"
        onChange={(event) => {
          setInputText(event.target.value)
        }}
        onKeyPress={handleChange}
        type="text"
      />
      <ul className="list-group">{filterList()}</ul>
    </div>
  )
}
