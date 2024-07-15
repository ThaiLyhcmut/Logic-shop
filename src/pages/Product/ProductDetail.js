import { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { cartadd } from "../../actions/cartadd";

const CountReducer = (state, action) => {
  return action === "add"?state+1:state>1?state-1:1
}

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const [ ProdcutDetail,setProductDetail ] = useState()
  const [ count,dispatchCount ] = useReducer(CountReducer,1);
  const dispatchCart = useDispatch()
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`).then(res => res.json()).then(data => {
      data.priceNew = (data.price*(1-data.discountPercentage/100)).toFixed(2);
      setProductDetail(data);
    }).catch(error => console.log(error))
  },[])
  return(
    <>
      Trang chi tiet san pham
      {ProdcutDetail && (
        <div className="product__detail">
          <div className="product__detail--item" key={ProdcutDetail.id}>
            <img src={ProdcutDetail.thumbnail} alt={ProdcutDetail.title}/>
            <div className="product__detail--content">{ProdcutDetail.title}</div>
            <h3>Gia cu: <del>{ProdcutDetail.price}$</del></h3>
            <h3>Giam: {ProdcutDetail.discountPercentage}%</h3>
            <h3>Gia moi: {ProdcutDetail.priceNew}$</h3>
          </div>
          <button onClick={() => dispatchCount("sub")}>-</button>
          <span style={ {margin: "0 10px"} }>{count}</span>
          <button onClick={() => dispatchCount("add")}>+</button>
          <br></br>
          <button onClick={() => dispatchCart(cartadd(count,productId,ProdcutDetail))}>Them san pham</button>
        </div>
      )}
    </>
  )
}