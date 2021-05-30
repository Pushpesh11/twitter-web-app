const reducer = (state, action) => {
      if (action.type === 'INCREASE') {
    let tempCart = state.data.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, like: cartItem.like + 1 }
      }
      return cartItem
    })
    return { ...state, cart: tempCart }
  }
  if(action.type === 'LOADING') {
      return { ...state, loading: true}
  }
}

export default reducer