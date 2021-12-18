import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const WithSpinnerComponent = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {

    console.log(isLoading, 'spinner');

    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...otherProps }/>
    )
  };
  return Spinner
};

export default WithSpinnerComponent;