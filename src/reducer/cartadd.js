const initial = {
  Cart: []  
}

export const cartReducer = (state = initial,action) => {
  switch (action.type) {
    case "add":
      const exits = state.Cart.findIndex(item => item.productDetail.id === action.productDetail.id)
      console.log(exits)
      if(exits !== -1){
        const stateNew = state.Cart.slice()
        stateNew[exits].quantity += action.quantity
        return {
          Cart: stateNew
        }
      }
      else{
        return{
          Cart:[
            ...state.Cart,
            {
              id: Date.now(),
              quantity: action.quantity,
              productDetail: action.productDetail
            }
          ]
        }
      }
    case "edit":
      console.log(action.productId)
      const index = state.Cart.findIndex(item => item.productDetail.id === action.productId)
      console.log(action)
      console.log(index)
      const stateNew = state.Cart.slice()
      console.log(stateNew)
      stateNew[index].quantity = action.quantity
      return {
        Cart: stateNew
      }
    case "delete":
      const statenew = state.Cart.filter(item => item.productDetail.id != action.productId)
      console.log(statenew)
      return{
        Cart: statenew
      }
    default:
      return state;
  }
}