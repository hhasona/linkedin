import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import Logo from "../assets/tglogo.png"
import HeaderOption from "./HeaderOption"
import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"
function Header() {
  return (
    <div className="header flex items-center justify-between border-b-2 py-2.5 px-2.5 sticky top-0 z-50">
      <div className="header_left flex items-center">
        <img className="object-contain h-10 mr-2.5" src={Logo} alt="logo" />
        <div className="header_search p-2 flex items-center rounded-md bg-[#eef3f8]">
          <SearchIcon />
          <input className="outline-none bg-transparent" type="text" />
        </div>
      </div>
      <div className="header_right flex ">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={PeopleIcon} title={"My Network"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption
          avatar={
            "https://media-exp1.licdn.com/dms/image/D4D35AQHFWhxrtYrJdw/profile-framedphoto-shrink_200_200/0/1662553258484?e=1663581600&v=beta&t=78o1jGw13os0TAiBMBDnYEIaPrzrEHd2skr8mtofQ2A"
          }
          title={"me"}
        />
      </div>
    </div>
  )
}

export default Header
