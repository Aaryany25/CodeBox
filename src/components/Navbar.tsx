// import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

interface NavbarProps {
  user?: any
  SignOut?: () => void
}

function Navbar({ user, SignOut }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#010101] border-b border-[#1e1f26]">
      {/* Left: Search & Logo */}
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl group">
          <svg
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z" />
          </svg>
          <span className="tracking-wider text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            CodeBox
          </span>
        </Link>

        {/* Search Bar */}
        <div className="relative flex-1 hidden md:block">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search CodeBox..."
            className="w-full pl-10 pr-4 py-2 text-sm text-white bg-[#1e1f26] border border-[#2c303d] rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="/code">
              <Button name="Go to Editor" variant="primary" />
            </Link>
            {SignOut && <Button name="Sign Out" variant="secondary" onClick={SignOut} />}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center font-bold text-black border border-white/20 select-none">
              {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
            </div>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
              Log In
            </Link>
            <Link to="/signup">
              <Button name="Sign Up" variant="primary" />
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
