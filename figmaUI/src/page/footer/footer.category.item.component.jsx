import React from "react";
import FormInputComponent from "../reusebal/form-input.component";
import '../../page/footer/footer.style.scss';

const FooterCategoryItemComponent = ({id, title, item}) => {

  return(
    <div className="footer-category-item-area" id={id}>
      <p>{ title }</p>

      <ul>
        {item.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div className="input-area">
        {id === 3 ? 
          <FormInputComponent placeholder="Your Email Adress" avatar="true"/>
          : null
        }
      </div>
    </div>
  )
};

export default FooterCategoryItemComponent;