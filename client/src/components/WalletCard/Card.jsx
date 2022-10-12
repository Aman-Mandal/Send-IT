import ethLogo from '../../assets/eth.png'
import { FiInfo } from 'react-icons/fi'

const Card = () => {
  return (
    <div className="rounded-xl flex flex-col justify-between w-[27rem] bg-gradient-to-br to-[#000000] from-[#0f0f0f] py-5 px-6 h-[15rem] mx-auto shadow-2xl">
      <div className="flex justify-between ">
        <img src={ethLogo} className="w-12" />
        <FiInfo className="text-gray-500 text-xl cursor-pointer" />
      </div>
      <div>
        <p className='text-white font-semibold'>--</p>
        <h2 className="text-gray-500 text-xl font-semibold">Ethereum</h2>
      </div>
    </div>
  )
}

export default Card
