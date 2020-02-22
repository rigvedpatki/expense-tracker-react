import uuid from 'uuid'
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: uuid(),
            text: action.payload.text,
            amount: action.payload.amount
          }
        ]
      }
    default:
      return state
  }
}
