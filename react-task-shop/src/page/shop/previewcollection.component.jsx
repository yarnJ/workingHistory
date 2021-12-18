import React from "react";
import { previewCategory } from "../../redux/shop/shop.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import '../shop/shop.style.css';

const ShopItem = ({collections}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const btnHandle = () => {
    dispatch(previewCategory(collections.id))

    navigate(`/shop-page/${collections.id}`);
  }

  return(
    <div className="previewCollection" id={ collections.id } onClick={ btnHandle }>
      <div className='menu-item'>
        <h1 className="title">{ collections.title }</h1>
        <h3 className="routeName">{ collections.routeName }</h3>
      </div>
    </div>
  )
}

export default ShopItem;