import React from "react"

function InputOption({ Icon, title, color }) {
  return (
    <div className="flex items-center mt-3 text-gray-500 p-2.5 cursor-pointer hover:bg-[whitesmoke] rounded-lg ">
      <Icon style={{ color: color }} />
      <h4 className="ml-1">{title}</h4>
    </div>
  )
}

export default InputOption
