import React from "react";

const ErrorComponent = ({ errorMessage, errorId }) => {
  return <span
    id={errorId}
    className='error_message'>{errorMessage}</span>
}

export default ErrorComponent
