import React from 'react'

const Card = ({ icon, title, text }) => {
  return (
    <div className="w-[20rem] px-2 py-3 bg-inherit my-4 space-y-4">
      <div className="p-2 w-fit backdrop-blur-sm bg-white/30 rounded-md text-3xl cursor-pointer hover:bg-[#fff]/80 hover:scale-105">
        {icon}
      </div>
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <p className="text-[#ababab] leading-6 text-sm tracking-wider">{text}</p>
    </div>
  )
}

export default Card
