import React, { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'

const TableList = ({ addressFrom, addressTo, amount, message }) => {
  return (
    <div className="w-full border border-gray-200 rounded-xl px-2 my-4 bg-[#151E2B]">
      <ul className="flex  text-white font-semibold text-lg py-3 text-center">
        <li className="flex-[0.25]">{`${addressTo.slice(
          0,
          6
        )}....${addressTo.slice(addressTo.length - 5)}`}</li>
        <li className="flex-[0.25]">{`${addressFrom.slice(
          0,
          6
        )}....${addressFrom.slice(addressFrom.length - 5)}`}</li>

        <li className="flex-[0.2]">{`${amount} ETH`}</li>
        <li className="flex-[0.3]">{message}</li>
      </ul>
    </div>
  )
}

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)
  return (
    <section className="w-[95%] md:w-[85%] mx-auto pb-10">
      <h2 className="text-center text-white text-5xl font-semibold py-5">
        Latest Transactions
      </h2>
      <p className="text-center text-sm text-[#ababab] ">
        All the latest transactions performed over the application
      </p>

      <div className="h-[2px] w-[10rem] mx-auto mt-4 bg-gradient-to-tr from-[#000000] via-[#383838] to-[#000000] " />
      <div className="w-full border border-gray-200 rounded-xl px-2 my-10 bg-[#252a32]">
        <ul className="flex justify-around text-white font-semibold text-lg py-3 text-center ">
          <li className="flex-[0.25]">Sender</li>
          <li className="flex-[0.25]">Reciever</li>
          <li className="flex-[0.2]">Amount</li>
          <li className="flex-[0.3]">Message</li>
        </ul>
        {transactions.map(transaction => (
          <TableList
            key={transaction.message}
            addressTo={transaction.addressTo}
            addressFrom={transaction.addressFrom}
            amount={transaction.amount}
            message={transaction.message}
          />
        ))}
      </div>
    </section>
  )
}

export default Transactions
