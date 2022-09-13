import { Avatar } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem flex font-medium text-gray-500 p-1 mb-1 hover:bg-[whitesmoke] hover:rounded-xl hover:cursor-pointer hover:text-black">
      <span className="sidebar__hash mx-2">#</span>
      <p>{topic}</p>
    </div>
  )

  const user = useSelector(selectUser)

  return (
    <div className="sidebar flex-[0.2] sticky top-20 rounded text-center h-fit">
      <div className="sidebar_top flex flex-col items-center border-2 border-b-0 pb-2.5 bg-[white]">
        <img
          className="sidebar_photo w-full object-cover h-20"
          src="https://live.staticflickr.com/5546/30213315651_5c15c7dda1_b.jpg"
          alt=""
        />
        <Avatar
          src={user.photoURL}
          className="sidebar_avatar mb-2.5 h-20 w-20 text-[40px]"
        >
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2 className="font-bold">{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats   p-2.5 mb-2.5 border-2 bg-white ">
        <div className="sidebar__stat mt-2.5 flex justify-between">
          <p className="text-gray-400 font-bold">Who viewed you</p>
          <p className="sidebar__statNumber text-[#0a66c2] font-bold">2,543</p>
        </div>
        <div className="sidebar_stat mt-2.5 flex justify-between">
          <p className="text-gray-400 font-bold">Views on post</p>
          <p className="sidebar__statNumber text-[#0a66c2] font-bold">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom text-left p-2.5 border-2 mt-2.5 bg-white rounded">
        <p className="pb-2.5 text-[13px]">Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
      </div>
      <style jsx>{`
        .sidebar {
          flex: 0.2;
        }
        .sidebar_top {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .sidebar_photo {
          margin-bottom: -40px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .sidebar_stats {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default Sidebar
