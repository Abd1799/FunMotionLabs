import React from 'react'

const EachCustomerReview = (props) => {
  return (
    <div className="flex p-16 justify-between">
      <div className="w-1/2">
        <h4>{props.text}</h4>
      </div>
      <div className="w-1/2 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50">
        <img src={props.image} alt="Customer" />
      </div>
    </div>
  );
}

export default EachCustomerReview
