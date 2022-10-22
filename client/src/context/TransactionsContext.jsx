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

  console.log({
    provider,
    signer,
    transactionsContract,
  })
}

export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')

  // check wallet is connected
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask!!😕')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No accounts found!!')
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object!')
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

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <TransactionsContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionsContext.Provider>
  )
}
