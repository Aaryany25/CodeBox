import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
}

function Button({ name, onClick, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-5 py-2.5 rounded font-medium text-sm transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black'
  
  const variants = {
    primary: 'bg-[#47cf73] text-black hover:bg-[#3ebe63] focus:ring-[#47cf73]',
    secondary: 'bg-[#1e1f26] text-white hover:bg-[#2c303d] border border-[#2c303d] focus:ring-gray-500',
    outline: 'bg-transparent text-white border border-[#2c303d] hover:border-white hover:bg-white/5 focus:ring-white',
    danger: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-600',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {name}
    </button>
  )
}

export default Button