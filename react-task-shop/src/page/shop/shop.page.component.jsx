import React from "react";
import CollectionOverviewComponent from "./collection-overview/collection.overview.component";
import CollectionCategoryComponent from "./collection-category/collection.category.component";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import WithSpinnerComponent from "../with-spinner/with-spinner.component";
import '../shop/shop.style.css';

const CollectionCategoryWithSpinner = WithSpinnerComponent(CollectionCategoryComponent);

const ShopPage = () => {

  const collections = useSelector(e => e.shop.shop);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return(
    <div className="shop-page">
        <Routes>
          <Route exact path="/" element = { <CollectionOverviewComponent collections = { collections }/> }/>

          <Route path={`/:categoryId`} element = { <CollectionCategoryComponent/> }/>
        </Routes>
    </div>
  )
};

export default ShopPage;