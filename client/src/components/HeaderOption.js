import React from "react"
import Avatar from "@mui/material/Avatar"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser)
  return (
    <div
      onClick={onClick}
      className="headerOption flex  flex-col items-center mr-7 text-[gray] cursor-pointer hover:text-[black]"
    >
      {Icon && <Icon className="headerOption__icon h-6 w-6" />}
      {avatar && (
        <Avatar
          className="headerOption__icon text-sm h-6 w-6"
          src={user?.photoURL}
        >
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title text-lg font-medium">{title}</h3>
    </div>
  )
}

export default HeaderOption
