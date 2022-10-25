import { Navbar, Card, Loader } from '../index'
import { GiAlliedStar } from 'react-icons/gi'
import { MdOutlineBadge } from 'react-icons/md'
import { useState } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'
import { useContext } from 'react'
import newYorkTimesLogo from '../../assets/newyork1.png'
import oracleLogo from '../../assets/oracle.png'
import forbesLogo from '../../assets/forbes.png'
import polygonLogo from '../../assets/polygon.png'

const Header = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    connectWallet,
    currentAccount,
    formData,
    changeHandler,
    sendTransaction,
  } = useContext(TransactionsContext)

  const sendTransactionHandler = event => {
    const { addressTo, amount, message } = formData
    event.preventDefault()

    if (!addressTo || !amount || !message) return
    sendTransaction()
  }

  return (
    <>
      <Navbar />
      <div className="min-w-screen py-20 ">
        <div className="flex lg:flex-row flex-col w-[95%] md:w-[85%] mx-auto max-w-7xl  ">
          <div className="flex-[0.5] flex flex-col pt-10">
            <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold py-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-900 via-gray-400 md:leading-[3.3rem] md:tracking-wide">
              Trusted and Secure <br /> Crypto & Ethereum <br /> exchange.
            </h1>
            <p className="text-base text-center md:text-left text-gray-400 pb-6">
              Get started with the easiest and most <br /> secure platform to
              send crypto.
            </p>

            {!currentAccount && (
              <button
                onClick={connectWallet}
                className="bg-gradient-to-r w-[15rem] md:mx-0 mx-auto from-gray-800 to-gray-900 border border-gray-200 my-10 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-900"
              >
                Connect Wallet
              </button>
            )}

            <div className="flex gap-8 my-10 mx-auto md:mx-0">
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <GiAlliedStar className="text-gray-300" />
                Trustpilot 4.7 <span className="text-gray-700">/5</span>
              </p>
              <p className="flex items-center gap-1 text-gray-500 text-sm">
                <MdOutlineBadge className="text-gray-300" />
                Bit Degree 8.7 <span className="text-gray-700">/10</span>
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="flex-[0.5] ">
            <div>
              <Card />
            </div>

            {/* Form */}
            <form className="flex flex-col bg-gradient-to-tr from-gray-800 to-gray-900 border border-gray-200  w-full md:w-[32rem] my-8 px-4 md:px-14 pt-10 pb-6 rounded-xl mx-auto">
              <label
                className="text-sm text-gray-300 pb-1 font-thin tracking-wider"
                htmlFor="tx-address"
              >
                Address
              </label>
              <input
                onChange={e => changeHandler(e, 'addressTo')}
                className="rounded py-2 px-1 mb-3   placeholder:text-gray-400 "
                type="text"
                id="tx-address"
                placeholder="0x000000000000"
              />
              <label
                className="text-sm text-gray-300  pb-1 font-thin tracking-wider"
                htmlFor="tx-amount"
              >
                Amount (ETH)
              </label>

              <input
                onChange={e => changeHandler(e, 'amount')}
                className="rounded px-1 py-2 mb-3  placeholder:text-gray-400 "
                type="number"
                step={0.01}
                id="tx-amount"
                placeholder="2.3eth"
              />
              <label
                className="text-sm text-gray-300  pb-1 font-thin tracking-wider"
                htmlFor="tx-message"
              >
                Message
              </label>
              <input
                onChange={e => changeHandler(e, 'message')}
                className="rounded px-1 py-2 mb-3  placeholder:text-gray-400 "
                type="text"
                id="tx-message"
                placeholder="Any message with your transaction..."
              />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  onClick={sendTransactionHandler}
                  className="bg-gray-900 border border-gray-200 my-6 text-white py-3 rounded-lg shadow-lg hover:bg-gray-700"
                >
                  Send Crypto
                </button>
              )}
            </form>
          </div>
        </div>
        <div className="w-[95%] md:w-[85%] mx-auto py-4">
          <p className="text-center  text-sm font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-900 via-gray-400">
            Buy <span className="text-white"> $20</span> or more in crypto on
            your first order and you'll get up to
            <span className="text-white"> $2</span> in free BTC as reward
          </p>
          <div className="h-[2px] w-full mt-6 bg-gradient-to-tr from-[#000000] via-[#383838] to-[#000000] " />
          <div className="flex items-center justify-evenly pt-12">
            <img className="w-32 h-8" src={forbesLogo} alt="Forbes" />
            <img
              className="w-60 h-9"
              src={newYorkTimesLogo}
              alt="NewYorkTimes"
            />
            <img className="w-44 h-6" src={oracleLogo} alt="Oracle" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
