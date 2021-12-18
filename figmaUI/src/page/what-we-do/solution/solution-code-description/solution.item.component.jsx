import React from "react";
// import { toggleSolution } from "../../../../redux/solution/solution.action";
// import { useDispatch, useSelector } from "react-redux";
import "../../../../page/what-we-do/solution/solution.style.scss";

const SolutionItemComponent = ({ id, title, description }) => {

  // const dispatch = useDispatch();
  // const hidden = useSelector(state => state.solution.hidden);

  return(
    <div className="solution-item">
      <p>{ description }</p>
    </div>

    // <div className="solution-item">
    //   <h4 onClick={() => dispatch(toggleSolution())}>{ title }</h4>

    //   {hidden ? null
    //     : <p>{ description }</p>
    //   }
    // </div>
  )
};

export default SolutionItemComponent;