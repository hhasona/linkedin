import React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function Loading() {
  return (
    <div className="h-screen flex flex-col py-24 items-center justify-evenly">
      <div className="w-1/3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="logo"
          className="w-2/3 mx-auto"
        />
      </div>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  )
}

export default Loading
