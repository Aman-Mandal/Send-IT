import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'

export const TransactionsContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionsContract
}

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  )
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    message: '',
  })

  const changeHandler = (event, name) => {
    setFormData(previousState => ({
      ...previousState,
      [name]: event.target.value,
    }))
  }

  // check wallet is connected
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask!!😕')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        getAllTransactions()
      } else {
        console.log('No accounts found!!')
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object!')
    }
  }

  const checkIfTransactionExist = async () => {
    try {
      const transactionContract = getEthereumContract()
      const transactionCount = await transactionContract.getTransactionCount()
      window.localStorage.setItem('transactionCount', transactionCount)
    } catch (error) {
      console.error(error.message)

      throw new Error('No ethereum object!!')
    }
  }

  // connect Wallet button
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask!! 😕')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object!')
    }
  }

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask!! 😕')
      const transactionContract = getEthereumContract()
      const availableTransactions =
        await transactionContract.getAllTransactions()

      const structuredTransactions = availableTransactions.map(transaction => ({
        addressTo: transaction.reciever,
        addressFrom: transaction.sender,
        message: transaction.message,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
      }))

      setTransactions(structuredTransactions)
    } catch (error) {
      console.error(error.message)
    }
  }

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask!! 😕')

      // get data from Form...
      const { addressTo, amount, message } = formData
      const transactionContract = getEthereumContract()
      const parsedAmount = ethers.utils.parseEther(amount)

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208',
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await transactionContract.sendCrypto(
        addressTo,
        parsedAmount,
        message
      )
      setIsLoading(true)

      console.log(`Sending Ethereum!! Please Wait...`)
      await transactionHash.wait()
      setIsLoading(false)
      console.log(`Successfully sent!! 😀 ${transactionHash.hash}`)

      const transactionCount = await transactionContract.getTransactionCount()
      setTransactionCount(transactionCount.toNumber())
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object!!')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
    checkIfTransactionExist()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        changeHandler,
        sendTransaction,
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
