import React, { useState } from "react"
import * as ReactDOM from "react-dom"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import TextField from "@mui/material/TextField"

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
  var [inputText, setInputText] = useState("")

  const filterList = () => {
    var updatedList = data.filter((item) => {
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
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        type="text"
      />
      <ul className="list-group">{filterList()}</ul>
    </div>
  )
}
