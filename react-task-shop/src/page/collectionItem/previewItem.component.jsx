import React from "react";
import '../collectionItem/collection.style.scss';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const PreviewItem = ({ title, items }) => {
 
  const dispatch = useDispatch();

  return(
    <div className="collectionItem">
      <div className="title">
        { title }
      </div>

    <div className="preview">
      {items.map((item, index) => (
        <div className="itemName" key={ index }>
          <h5>{ item.name } ({ item.price })</h5>

          <div className="buttonArea">
            <button className="addCart" onClick={ () => dispatch(addItemToCart(item))}>ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default PreviewItem