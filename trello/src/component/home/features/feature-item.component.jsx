import React from "react";
import ImageFeature from "../../../resuable/imageFeature/imageFeature.component";
import FeatureDescriptionComponent from "./feature-item/feature.description.component";
import FeatureLearnMoreComponent from "./feature-item/feature.learnmore.component";
import { toggleLearnMore } from "../../../redux/feature/feature.action";
import { useDispatch, useSelector } from "react-redux";
import '../features/feature.style.scss';

const FeatureItemComponent = ({ id, imgUrl, introduce, learnMore }) => {

  const dispatch = useDispatch();
  const hidden = useSelector(e => e.feature.hidden);

  return(
    <div>
      {id%2 === 0? (
        <div className="feature-item-side" id = { id }>
          <div className="img-side">
            <ImageFeature src={ imgUrl.default } style={ {width : "450px",  padding: "2.1rem"} }/>
          </div>
          
          <div className="overview">
            <FeatureDescriptionComponent introduce = { introduce }/>

            {learnMore !== "" ? 
              <h4 onClick={() => dispatch(toggleLearnMore())}>
                {
                  hidden ? "+"
                  : "-"
                }
                Learn more
              </h4>
              : null
            }

            {
              hidden ? null
              : <FeatureLearnMoreComponent learnMore = { learnMore }/>
            }
          </div>
        </div>
      ) : (
        <div className="feature-item-side" id = { id }>
          <div className="overview">
            <FeatureDescriptionComponent introduce = { introduce }/>

            {learnMore !== "" ? 
              <h4 onClick={() => dispatch(toggleLearnMore())}>
                {
                  hidden ? "+"
                  : "-"
                }
                Learn more
              </h4>
              : null
            }

            {
              hidden ? null
              : <FeatureLearnMoreComponent learnMore = { learnMore }/>
            }
          </div>

          <div className="img-side">
            <ImageFeature src = { imgUrl.default } style={ {width : "450px", padding: "2.1rem"} }/>
          </div>
        </div>
      ) }
    </div>
  )
};

export default FeatureItemComponent;