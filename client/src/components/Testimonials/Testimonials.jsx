import React from 'react'
import Card from './Card'
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from '../../assets/testimonials/index'

const data = [
  {
    id: 't1',
    name: 'Mario',
    place: 'Berlin, German',
    img: image1,
    message:
      "Send.io has complete features and is very easy to use, lower admin fees and trading fees are one of it's advantages.",
  },
  {
    id: 't2',
    name: 'Elizabeth',
    place: 'Newyork, US',
    img: image2,
    message:
      'The first time trying to register, the verification process is quite fast as compared to the competitors. For beginners will be very helpful.',
  },
  {
    id: 't3',
    name: 'Jace',
    place: 'CBD, Singapore',
    img: image3,
    message:
      'A crypto website that really helps me in trading or investing in cryptocurrencies. The pair in each coin is very diverse.',
  },
  {
    id: 't4',
    name: 'Snow',
    place: 'Berlin, German',
    img: image4,
    message:
      "Send.io has complete features and is very easy to use, lower admin fees and trading fees are one of it's advantages",
  },
  {
    id: 't5',
    name: 'Austin',
    place: 'Paris, Italy',
    img: image5,
    message:
      'The first time trying to register, the verification process is quite fast as compared to the competitors. For beginners will be very helpful.',
  },
  {
    id: 't6',
    name: 'Emma',
    place: 'Berlin, German',
    img: image6,
    message:
      'A crypto website that really helps me in trading or investing in cryptocurrencies. The pair in each coin is very diverse.',
  },
  {
    id: 't7',
    name: 'Daemon',
    place: 'Mumbai, India',
    img: image7,
    message:
      "Send.io has complete features and is very easy to use, lower admin fees and trading fees are one of it's advantages",
  },
  {
    id: 't8',
    name: 'Sam',
    place: 'London, England',
    img: image8,
    message:
      'A crypto website that really helps me in trading or investing in cryptocurrencies. The pair in each coin is very diverse.',
  },
]

const Testimonials = () => {
  return (
    <section className="w-[95%] md:w-[85%] mx-auto py-20">
      <h2 className="text-center text-white text-5xl font-semibold py-5">
        What they say about us
      </h2>
      <p className="text-center text-sm text-[#ababab] ">
        Some testimonials from our platform users, let's get started and prove
        <br /> yourself the advantages of our platform
      </p>
      <div className="h-[2px] w-[10rem] mx-auto mt-4 bg-gradient-to-tr from-[#000000] via-[#383838] to-[#000000] " />

      <div className="flex my-10">
        {data.map(data => (
          <Card
            key={data.id}
            img={data.img}
            name={data.name}
            place={data.place}
            message={data.message}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
