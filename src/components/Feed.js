import React, { useState, useEffect } from "react"
import InputOption from "./InputOption"
import CreateIcon from "@mui/icons-material/Create"
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"
import Post from "./Post"
import { db } from "../firebase"
import firebase from "firebase/compat/app"
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"
import FlipMove from "react-flip-move"
function Feed() {
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState("")
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])
  const sendPost = (e) => {
    e.preventDefault()

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("")
  }

  return (
    <div className="lg:flex-[0.6] lg:mx-5">
      <div className="feed_inputContainer bg-white p-2.5 pb-5 rounded-lg mb-5">
        <div className="feed_input border-2 rounded-[50px] flex p-2.5 text-[gray] pl-4 ">
          <CreateIcon />
          <form className="flex w-full ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-none flex-1 ml-2.5 outline-0 font-light"
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} className="hidden" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions flex justify-evenly mt-2.5">
          {/* import option */}
          <InputOption Icon={ImageIcon} title="Photo" color={"orange"} />
          <InputOption Icon={SubscriptionsIcon} title="Video" color={"green"} />
          <InputOption Icon={EventNoteIcon} title="Event" color={"red"} />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color={"blue"}
          />
        </div>
      </div>
      {/* Posts listed */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
