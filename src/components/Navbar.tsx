// import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav className='flex  items-end gap-4 p-4 bg-black'>
    
<div className="py-2 px-4 bg-green-400 rounded hover:bg-green-500 hover:text-white">

      <Link to="/signup">Sign Up</Link>
</div>
      
    </nav>
    </div>
  )
}

export default Navbar