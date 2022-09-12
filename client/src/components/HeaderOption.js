import React from "react"
import Avatar from "@mui/material/Avatar"

function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className="headerOption flex  flex-col items-center mr-7 text-[gray] cursor-pointer hover:text-[black]">
      {Icon && <Icon className="headerOption__icon h-6 w-6" />}
      {avatar && (
        <Avatar className="headerOption__icon h-6 w-6" src={avatar}></Avatar>
      )}
      <h3 className="headerOption__title text-lg font-medium">{title}</h3>
    </div>
  )
}

export default HeaderOption
