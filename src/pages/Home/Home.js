import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [listProduct, setListProduct] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(res => res.json()).then(data => {
      setListProduct(data.products)
    }).catch(error => console.log(error))
  },[])
  return(
    <>
      Trang chu
      {listProduct && (
        <div className="product__list">
          {listProduct.map(item => (
            <div className="product__item" key={item.id}>
              <Link to={`products/${item.id}`}>
                <div>{item.title}</div>
                <img src={item.thumbnail} alt={item.title}/>
                <div>{item.price}</div>
                
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  )
}