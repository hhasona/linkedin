import React, { useState } from "react"
import { Avatar } from "@mui/material"
import InputOption from "./InputOption"

import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material"

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post bg-white p-4 mb-2.5 rounded-lg">
      <div className="post_header flex mb-2.5">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className="post_info ml-2.5">
          <h2 className="text-[15px]">{name}</h2>
          <p className="text-[12px] text-gray-500">{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons flex justify-evenly">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
      <style jsx>{`
        .post_body {
          overflow-wrap: anywhere;
        }
      `}</style>
    </div>
  )
}

export default Post
