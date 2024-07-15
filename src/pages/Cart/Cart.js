import { useDispatch, useSelector } from "react-redux"
import { cartdelete, cartedit } from "../../actions/cartadd";

export const CartPage = () => {
  const Cart = useSelector(state => state.cartReducer.Cart)
  const dispatchQuatity = useDispatch()
  
  let totalPrice = 0;
  Cart.forEach(item => {
    item.totalPrice = parseFloat((item.productDetail.priceNew * item.quantity).toFixed(2))
    totalPrice += parseFloat(item.totalPrice)
  });
  totalPrice.toFixed(2)
  const handleQuantity = (event,id) => {
    event.preventDefault();
    dispatchQuatity(cartedit(event.target.value,id))
  }
  const handleDelete = (event,id) => {
    event.preventDefault();
    dispatchQuatity(cartdelete(id))
  }
  return (
    <>
      <h1>Trang giỏ hàng</h1>

      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Hình ảnh</th>
            <th>Tiêu đề</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tạm tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {Cart.length > 0 ? (<>
            {Cart.map((item, index) => (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>
                  <img 
                    src={item.productDetail.thumbnail} 
                    alt={item.productDetail.title} 
                    style={{ width: "80px" }}
                  />
                </td>
                <td>
                  {item.productDetail.title}
                </td>
                <td>
                  <div>Giá cũ: <del>{item.productDetail.price}$</del></div>
                  <div>Giảm: {item.productDetail.discountPercentage}%</div>
                  <div>Giá mới: <b>{item.productDetail.priceNew}$</b></div>
                </td>
                <td>
                  <input 
                    type="number" 
                    defaultValue={item.quantity} 
                    min={1}
                    style={{ width: "60px" }} 
                    onChange={(event) => handleQuantity(event,item.productDetail.id)}
                  />
                </td>
                <td>
                  <b>{item.totalPrice}$</b>
                </td>
                <td>
                  <button onClick={(event) => handleDelete(event,item.productDetail.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </>) : (<>
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>Giỏ hàng rỗng!</td>
            </tr>
          </>)}
        </tbody>
      </table>

      <h3>Tổng tiền: {totalPrice}$</h3>
    </>
  )
}