import React from "react";
import SolutionItemComponent from "./solution.item.component";
import "../../../../page/what-we-do/solution/solution.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleSolution } from "../../../../redux/solution/solution.action";

const SolutionCodeItemComponent = ({solutionCodeData}) => {

  const dispatch = useDispatch();
  const hidden = useSelector(e => e.solution.hidden);
  const hiddenId = useSelector(e => e.solution.hiddenId)

  return(
    <div className="solution-code-item-area">
      {solutionCodeData.map(({...otherSolutionCodeItemComponentProps}, index) => (
        <div key={index}>
          <h4 onClick={() => dispatch(toggleSolution(otherSolutionCodeItemComponentProps.id))}>{ otherSolutionCodeItemComponentProps.title }</h4>
          {hidden ? null
            : (hiddenId === otherSolutionCodeItemComponentProps.id)
            ? <SolutionItemComponent key={index} { ...otherSolutionCodeItemComponentProps }/>
            : <SolutionItemComponent key={index} { ...otherSolutionCodeItemComponentProps[hiddenId] }/> 
            && !hidden
          }
        </div>
      ))}
    </div>
  )
};

export default SolutionCodeItemComponent;