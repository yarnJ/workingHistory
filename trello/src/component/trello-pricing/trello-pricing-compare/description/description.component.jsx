import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../../page/trello-pricing/trello.pricing.style.scss";

const DescriptionComponent = ({ description_title, description }) => {

  const search_key = useSelector(state => state.trello.search_key);

  return(
    <div className="trello-compare-description-area">
      <table data-testid="feature-comparison-table" className="UiFeatureComparisonTablestyles__FeatureTable-sc-d89oq6-0 cGgHnD">
        <thead data-testid="feature-comparison-table-thead">
          <tr>
            <th></th>
            {description_title.map(title => (
              <th>{ title }</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {description.map(description => (
            description.title.includes(search_key) ? 
            <tr>            
              <td>
                <h5>{ description.title }</h5>
                <p>{ description.description }</p>
                <Link to={ description.path }>{ description.pathName }</Link>
              </td>
              {description.value.map(value => (
              <td>{ value === "1" ? <i className="fa fa-check"></i>
              : null
              }</td>
            ))}
            </tr>
            : null
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default DescriptionComponent;