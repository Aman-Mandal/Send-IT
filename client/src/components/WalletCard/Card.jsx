import ethLogo from '../../assets/eth.png'
import { FiInfo } from 'react-icons/fi'
import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'
import { accountShortner } from '../../utils/accountShortner'

const Card = () => {
  const { currentAccount } = useContext(TransactionsContext)

  return (
    <div className="rounded-xl flex flex-col justify-between w-full md:w-[27rem] z-10 border border-gray-800 bg-gradient-to-br to-[#000000] from-[#0f0f0f] py-5 px-6 h-[15rem] mx-auto shadow-2xl ">
      <div className="flex justify-between ">
        <img src={ethLogo} className="w-12" />
        <FiInfo className="text-gray-500 text-xl cursor-pointer" />
      </div>
      <div>
        <p className="text-gray-300 font-semibold tracking-wide">
          {currentAccount ? accountShortner(currentAccount) : '--'}
        </p>
        <h2 className="text-gray-500 text-xl font-semibold">Ethereum</h2>
      </div>
    </div>
  )
}

export default Card
