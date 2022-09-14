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
import { FaBars, FaTimes } from "react-icons/fa"

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

  const [showLinks, setShowLinks] = React.useState(false)
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
        <ul className="hidden lg:flex ">
          <HeaderOption Icon={HomeIcon} title={"Home"} path="/" />
          <HeaderOption
            Icon={PeopleIcon}
            title={"My Network"}
            path="/newtwork"
          />
          <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} path="/jobs" />
          <HeaderOption Icon={ChatIcon} title={"Messaging"} path="/message" />
          <HeaderOption
            Icon={NotificationsIcon}
            title={"Notifications"}
            path="notifications"
          />
          <HeaderOption avatar={true} title={"me"} onClick={logoutOfApp} />
        </ul>
      </div>
      <div
        onClick={() => setShowLinks(!showLinks)}
        className="lg:hidden cursor-pointer pr-4 z-40 text-gray-500"
      >
        {showLinks ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {showLinks && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <HeaderOption Icon={HomeIcon} title={"Home"} path="/" />
          <HeaderOption
            Icon={PeopleIcon}
            title={"My Network"}
            path="/newtwork"
          />
          <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} path="/jobs" />
          <HeaderOption Icon={ChatIcon} title={"Messaging"} path="/message" />
          <HeaderOption
            Icon={NotificationsIcon}
            title={"Notifications"}
            path="notifications"
          />
          <HeaderOption avatar={true} title={"me"} onClick={logoutOfApp} />
        </ul>
      )}
    </div>
  )
}

export default Header
