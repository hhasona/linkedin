import "./App.css"
import React, { useEffect } from "react"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"
import Login from "./components/Login"
import { useDispatch } from "react-redux"
import { login, logout } from "./features/userSlice"
import { auth } from "./firebase"
import { selectView, success, loading } from "./features/viewSlice"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loading())
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
        dispatch(success())
        navigate("/")
      } else {
        dispatch(logout())
        dispatch(success())
      }
    })
  }, [])

  const user = useSelector(selectUser)

  return (
    <div className="flex flex-col h-full bg-[#f3f2ef] items-center">
      {user && <Header />}
      <Routes>
        {!user ? (
          <>
            <Route path="*" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<Login />} />
          </>
        ) : (
          <Route
            path="/"
            element={
              <div className="lg:flex-row flex flex-col w-full max-w-6xl mt-8 mx-5">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            }
          />
        )}
      </Routes>
    </div>
  )
}

export default App
