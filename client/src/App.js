import "./App.css"
import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
// import Widgets from "./components/Widgets"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import Login from "./components/Login"
import { useDispatch } from "react-redux"
import { login, logout } from "./features/userSlice"
import { auth } from "./firebase"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  const user = useSelector(selectUser)
  return (
    <div className="flex flex-col bg-[#f3f2ef] items-center">
      {/* Header */}
      <Header />
      {/* App Body */}

      {!user ? (
        <Login />
      ) : (
        <div className="flex w-full max-w-6xl mt-8 mx-5">
          <Sidebar />
          <Feed />
          {/* <Sidebar /> */}
          {/* <Widgets /> */}
        </div>
      )}
    </div>
  )
}

export default App
