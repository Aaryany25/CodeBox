import React from 'react'

function Button({name,onClick}:{name:string,onClick:any}) {
  return (
    <div onClick={onClick} className="bg-blue-500 text-white p-2 rounded w-1/5">
      {name}
    </div>
  )
}

export default Button