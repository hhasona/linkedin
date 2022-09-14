import React from "react"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
import { loading, success, failure } from "../features/viewSlice"
import Loading from "./Loading"
import { useSelector } from "react-redux"
import { selectView } from "../features/viewSlice"
function Login() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [profilePic, setProfilePic] = React.useState("")
  const dispatch = useDispatch()

  const view = useSelector(selectView)
  console.log("loading", view.isLoading)
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!")
    }
    dispatch(loading())
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: authUser.user.email,
                uid: authUser.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
            if (view.isLoading) {
              dispatch(success())
            }
          })
      })
      .catch((error) => {
        alert(error)
        dispatch(failure())
      })
  }
  const loginToApp = () => {
    dispatch(loading())
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch(
          login({
            email: authUser.user.email,
            uid: authUser.user.uid,
            displayName: authUser.user.displayName,
            photoUrl: authUser.user.photoURL,
          })
        )
        if (authUser) {
          dispatch(success())
        }
      })
      .catch((error) => {
        alert(error)
        dispatch(failure())
      })
  }

  if (view.isLoading) {
    return <Loading />
  }

  return (
    <div className="w-screen flex justify-evenly">
      <div className="hidden md:flex items-center">
        <img
          src="https://img.freepik.com/free-vector/log-into-several-devices-responsive-app-design-wifi-zone-gadgets-online-communication-social-networking-web-connection-initialize-sign-up-vector-isolated-concept-metaphor-illustration_335657-1999.jpg?w=826&t=st=1663153050~exp=1663153650~hmac=4ffb6458b94d8d8bc6a392b9190364219e2af136329b4c1daa39aa62e31fd9cb"
          alt="login"
          className="h-full"
        />
      </div>
      <div className="login grid place-items-center  h-screen py-24">
        <img
          className="object-contain h-16 my-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
          alt=""
        />
        <div className="flex flex-col">
          <input
            className="w-80 h-12 text-[20px] pl-2.5 mb-2.5 rounded-md"
            type="text"
            placeholder="Full name (required if registering)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-80 h-12 text-[20px] pl-2.5 mb-2.5 rounded-md"
            type="text"
            placeholder="Profile pic URL (optional)"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
          <input
            className="w-80 h-12 text-[20px] pl-2.5 mb-2.5 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-80 h-12 text-[20px] pl-2.5 mb-2.5 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-80 h-12 font-bold text-white bg-[#0074b1] rounded-md"
            onClick={loginToApp}
            type="submit"
          >
            Sign In
          </button>
        </div>
        <p className="pt-5">
          Not a member?{" "}
          <span
            onClick={register}
            className="login__register cursor-pointer text-[#0074b1]"
          >
            Register Now
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
