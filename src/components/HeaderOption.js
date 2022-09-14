import React from "react"
import Avatar from "@mui/material/Avatar"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { useNavigate } from "react-router-dom"
function HeaderOption({ Icon, title, avatar, onClick, path }) {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  return (
    <div
      onClick={onClick ? onClick : () => navigate(path)}
      className="headerOption flex  flex-col items-center mr-7 text-[gray] cursor-pointer hover:text-[black]"
    >
      {Icon && <Icon className="headerOption__icon h-6 w-6" />}
      {avatar && (
        <Avatar
          className="headerOption__icon text-sm h-6 w-6"
          src={user?.photoUrl}
        >
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      <h3 className="headerOption__title text-lg font-medium">{title}</h3>
    </div>
  )
}

export default HeaderOption
