import React from 'react'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { FaShieldVirus, FaViruses } from 'react-icons/fa'
import { BiSupport, BiMedal } from 'react-icons/bi'
import { GiStarsStack } from 'react-icons/gi'
import Card from './Card'

const data1 = [
  {
    id: '1',
    icon: <BsFillCreditCard2BackFill />,
    title: 'Payment Options',
    text: ' Multiple payment methods: Visa Mastercard, bank transfer (SWIFT,SEPA, ACH, Faster Payments), Cryptocurrency',
  },
  {
    id: '2',
    icon: <FaShieldVirus />,
    title: 'Strong Security',
    text: 'Protection against DDoS attacks, full data encryption, cryptocurrency, cold storage, and compilance with PCi DDS standards to safeguard your funds',
  },
  {
    id: '3',
    icon: <BiSupport />,
    title: '24/7 support',
    text: ' Dedicated support via email phone, and live chat around the clock to answer your questions at any time',
  },
]
const data2 = [
  {
    id: '1',
    icon: <GiStarsStack />,
    title: 'Competitive Commissions',
    text: ' Reasonsable fees for takers and makers, special conditions for high-volume traders, and strong offers for market makers',
  },
  {
    id: '2',
    icon: <BiMedal />,
    title: 'Reliable order execution',
    text: 'Advanced order matching algorithms, a high-liquidity order book, favorable conditions for market making, high-frequency trading,  and scalping strategies',
  },
  {
    id: '3',
    icon: <FaViruses />,
    title: 'Range of API Solutions',
    text: 'WebSocket, REST API and FIX API for automated trading based on the needs of individuals and institutions ',
  },
]

const Services = () => {
  return (
    <section className="w-[95%] md:w-[85%] mx-auto py-44">
      <h2 className="text-center text-white text-5xl font-semibold py-5">
        Start Trading Crypto
      </h2>
      <p className="text-center text-sm text-[#ababab] ">
        We guarantee the security of your data in transactions
      </p>
      <div className="h-[2px] w-[10rem] mx-auto mt-4 bg-gradient-to-tr from-[#000000] via-[#383838] to-[#000000] " />

      <div className="pt-20 pb-10">
        <div className="flex justify-between">
          {data1.map(data => (
            <Card
              key={data.id}
              icon={data.icon}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
        <div className="flex justify-between">
          {data2.map(data => (
            <Card
              key={data.id}
              icon={data.icon}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>
      </div>
      <div className="flex  justify-center">
        <button className="bg-gray-900 border border-gray-200 my-6 text-white py-3 w-44 rounded-lg shadow-lg hover:bg-gray-700">
          Start Trading
        </button>
      </div>
    </section>
  )
}

export default Services
