import React from 'react'
import image1 from '../../assets/testimonials/image-1.jpg'

const Card = ({ img, name, place, message }) => {
  return (
    <div className="px-6 pointer-events-none py-8  border border-gray-200 rounded-2xl min-w-[18rem] flex flex-col items-center bg-gradient-to-r from-[#1b2330] to-[#010a19] my-10 text-white  shadow-lg hover:bg-gray-900">
      <img src={img} className="h-20 w-20 object-cover rounded-full mb-3" />
      <h2 className="font-semibold text-xl">{name}</h2>
      <p className=" text-sm mb-3 text-gray-300">{place}</p>
      <p className="text-center text-sm leading-6">{message}</p>
    </div>
  )
}

export default Card
