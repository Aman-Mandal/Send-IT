import { Navbar, Card } from '../index'

const Header = () => {
  return (
    <header className="bg-gradient-to-tr min-h-screen from-[#050810] via-[#0A0A18] to-[#202155] ">
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
          <div className="flex-[0.5] ">
            <div>
              <Card />
            </div>
            {/* <div className="relative pl-3 z-[1]">
              <form className="flex flex-col  w-[35rem] absolute px-20 -top-24 py-32 rounded-xl ">
                <label
                  className="text-sm text-white font-thin tracking-wider"
                  htmlFor="tx-address"
                >
                  Address
                </label>
                <input
                  className="rounded py-2 mb-2 border border-gray-200 placeholder:0x2e456cf642244 placeholder:text-black "
                  type="text"
                  id="tx-address"
                />
                <label
                  className="text-sm text-white font-thin tracking-wider"
                  htmlFor="address"
                >
                  Amount (ETH)
                </label>

                <input
                  className="rounded py-2 mb-2 border border-gray-200
                placeholder:0x2e456cf642244 placeholder:text-black "
                  type="number"
                  id="amount"
                />
                <label
                  className="text-sm text-white font-thin tracking-wider"
                  htmlFor="message"
                >
                  Message
                </label>
                <input
                  className="rounded py-2 mb-2 border border-gray-200 placeholder:0x2e456cf642244 placeholder:text-black "
                  type="text"
                  id="message"
                />
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
