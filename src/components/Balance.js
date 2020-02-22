import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  )

  const sign = balance < 0 ? '-' : ''

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign} ₹ {balance}
      </h1>
    </>
  )
}
