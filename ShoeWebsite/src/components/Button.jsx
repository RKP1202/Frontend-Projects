import React from 'react'

const Button = ({ label, iconUrl }) => {
  return (
    <button className="bg-coral-red flex 
            items-center justify-center gap-2 text-white
            rounded-full px-7 py-4
    ">
      {label}
      <img src={iconUrl}
        alt="icon"
        className="w-6 h-6 pt-1 ml-5"
      />
    </button>
  )
}

export default Button