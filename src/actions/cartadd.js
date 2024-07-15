export const cartadd = (quantity,productId,productDetail) => {
  return{
    type: "add",
    quantity: quantity,
    productId: productId,
    productDetail: productDetail
  }
}

export const cartedit = (quantity,id) => {
  return{
    type: "edit",
    quantity: quantity,
    productId: id
  }
}

export const cartdelete = (id) => {
  return{
    type: "delete",
    productId: id
  }
}