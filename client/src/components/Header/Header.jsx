import { Navbar, Card } from '../index'

const Header = () => {
  return (
    <header className="bg-gradient-to-tr from-[#050810] via-[#0A0A18] to-[#202155]">
      <Navbar />
      <div className="min-w-screen py-20 ">
        <div className="flex w-[85%] mx-auto">
          <div className="flex-[0.5]">
            <h1 className="text-5xl font-semibold py-6 text-white">
              Send Crypto <br /> Anywhere in the World
            </h1>
            <p className="text-base text-gray-400 pb-6">
              Get started with the easiest and most <br /> secure platform to
              send crypto.
            </p>

            <button className="bg-gray-800 border border-gray-200 my-4 text-white px-6 py-3 rounded-lg shadow-lg">
              Connect Wallet
            </button>
          </div>
          <div className="flex-[0.5]">
            <div>
              <Card />
            </div>
            <form></form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
