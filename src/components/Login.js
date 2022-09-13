import React from "react"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"
function Login() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [profilePic, setProfilePic] = React.useState("")
  const dispatch = useDispatch()
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!")
    }
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
          })
      })
      .catch((error) => alert(error))
  }
  const loginToApp = () => {
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
      })
      .catch((error) => alert(error))
  }
  return (
    <div className="login grid place-items-center mx-auto py-24">
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
  )
}

export default Login
