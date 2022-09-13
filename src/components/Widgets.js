import React from "react"
import InfoIcon from "@mui/icons-material/Info"
import { FiberManualRecord } from "@mui/icons-material"
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article flex p-2.5 cursor-pointer hover:bg-[whitesmoke]">
      <div className="widgets_articleLeft text-[#0177b7] mr-1">
        <FiberManualRecord fontSize="15px" />
      </div>
      <div className="widgets_articleRight flex-1 ">
        <h4 className="text-[14px]">{heading}</h4>
        <p className="text-gray-400 text-[12px]"> {subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets flex-[0.2] sticky top-20 bg-white rounded border-2 h-fit pb-2.5">
      <div className="header flex items-center justify-between p-2.5">
        <h2 className="">LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin breaks $22k", "Crypto - 8000 readers")}
      {newsArticle("Is Redux too good?", "Code - 123 readers")}
    </div>
  )
}

export default Widgets
