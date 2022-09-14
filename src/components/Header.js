import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import HeaderOption from "./HeaderOption"
import HomeIcon from "@mui/icons-material/Home"
import PeopleIcon from "@mui/icons-material/People"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"
import { logout } from "../features/userSlice"
import { useSelector } from "react-redux"
import { loading, success, failure, selectView } from "../features/viewSlice"
import Loading from "./Loading"
function Header() {
  const view = useSelector(selectView)

  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(loading())
    dispatch(logout())
    auth.signOut()
    if (auth) {
      dispatch(success())
    } else {
      dispatch(failure())
    }
  }
  if (view.isLoading) {
    return <Loading />
  }
  return (
    <div className="header flex items-center w-full justify-evenly border-b-[1px] py-2.5 px-2.5 sticky top-0 z-50 bg-white">
      <div className="header_left flex items-center">
        <img
          className="object-contain h-10 mr-2.5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="logo"
        />
        <div className="header_search p-2 flex items-center rounded-md bg-[#eef3f8]">
          <SearchIcon />
          <input
            placeholder="Search"
            className="outline-none bg-transparent pl-1"
            type="text"
          />
        </div>
      </div>
      <div className="header_right flex ">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={PeopleIcon} title={"My Network"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notifications"} />
        <HeaderOption avatar={true} title={"me"} onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header
