import React from "react";
import FormInput from "../../../../resuable/formInput/form-input.component";
import { useDispatch } from "react-redux";
import { searchTrello } from "../../../../redux/trello/trello.action";
import "../../../../page/trello-pricing/trello.pricing.style.scss";

const SearchbarComponent = ({ searchbar }) => {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchTrello(e.target.value));
  }

  console.log(searchbar, 'sear');
  return(
    <div className="search-bar-area">
      <FormInput title={searchbar.className} type={searchbar.type} placeholder={searchbar.placeholder} onChange={handleChange}/>
    </div>
  )
};

export default SearchbarComponent;