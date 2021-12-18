import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PreviewItem from "./previewItem.component";
import { fetchCollectionsStartAsync } from "../../redux/collection/collection.action";
import { selectCollectionsForPreview } from "../../redux/shop/shop.utilies";
import { useEffect } from "react";

const Collection = () => {

  const dispatch = useDispatch();
  const collections = useSelector(state => state.collections.collections);
  const collection = selectCollectionsForPreview(collections);
  console.log(collection, 'select');

  useEffect(() => {

    dispatch(fetchCollectionsStartAsync());
  }, []);

    return (
      <div className="collection">
        {collection.map(({ id, ...otherCollectionProps },index) => (
          <PreviewItem key={index} {...otherCollectionProps}></PreviewItem>
          ))
        }
      </div>
    );
};

export default Collection;
