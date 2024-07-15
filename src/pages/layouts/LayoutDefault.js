import { useSelector } from "react-redux"
import { Link,Outlet } from "react-router-dom"

export const LayoutDefault = () => {
  const CartProduct = useSelector(state => state.cartReducer.Cart)
  return(
    <>
      <header>
        <ul>
          <li><Link to="/">Trang chu</Link></li>
          <li><Link to="/cart">Gio hang ({CartProduct.length})</Link></li>
        </ul>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}