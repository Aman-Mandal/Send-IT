import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="flex w-[95%] md:w-[85%] mx-auto justify-between text-white border-t border-gray-200 py-10">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">send.io</h2>
        <p>
          Most secure platform to buy, <br />
          sell, trade, and earn cryptocurrencies
        </p>
        <p className="text-sm hover:underline cursor-pointer">
          support@sendio.com
        </p>

        <div className="flex space-x-5 text-xl ">
          <BsInstagram className="hover:scale-110 cursor-pointer" />
          <BsTwitter className="hover:scale-110 cursor-pointer" />
          <BsLinkedin className="hover:scale-110 cursor-pointer" />
          <FaFacebookSquare className="hover:scale-110 cursor-pointer" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <ul className="text-sm space-y-1">
          <li>Buy Bitcoin</li>
          <li>Buy Ethereum</li>
          <li>Send Bitcoin</li>
          <li>Send Ethereum</li>
          <li>BTC to USD</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Information</h2>
        <ul className="text-sm space-y-1">
          <li>Limits & Commissions</li>
          <li>How to Buy Crypto </li>
          <li>Bitcoin Halving</li>
          <li>Card Verification</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Tools</h2>
        <ul className="text-sm space-y-1">
          <li>API</li>
          <li>Bitcoin Calculator</li>
          <li>Bitcoin Price Weight</li>
          <li>Mobile App</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <ul className="text-sm space-y-1">
          <li>Contact Us</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Help Centre</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
