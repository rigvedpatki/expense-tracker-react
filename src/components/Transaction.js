import React from 'react'

export const Transaction = ({ transaction }) => {
  if (transaction.amount < 0) {
    return (
      <li className="minus">
        {transaction.text} <span>- ₹ {transaction.amount * -1}</span>
        <button className="delete-btn">x</button>
      </li>
    )
  } else {
    return (
      <li className="plus">
        {transaction.text} <span>+ ₹ {transaction.amount}</span>
        <button className="delete-btn">x</button>
      </li>
    )
  }
}
