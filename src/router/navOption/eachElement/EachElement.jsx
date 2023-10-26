import React from 'react'
import './eachElement.css'

const EachElement = ({data}) => {
    console.log(Array.from({length:data.rating},(_,index)=> <span key={index} className="star-icon">&#9733;</span> ));

  return (
    <>
 
    <div className="card">
      <img src={data.image} alt="Product" className="card-image" />
      <h2 className="card-name">{data.name}</h2>
      <p className={`card-instock ${data.instock > 0 ? 'text-success' : 'text-danger'}`}>{data.instock > 0 ? 'InStock' : 'Out-Of Stock'}</p>
      <p className="card-price">${data.price}</p>
      <div className="card-rating">
        {/* Assuming rating is a number between 1 and 5 */}
        {Array.from({ length: data.rating }, (_, index) => (
          <span key={index} className={`star-icon ${data.rating > 2 ? 'text-success' : 'text-danger'}`}>&#9733;</span>
        ))}
      </div>
      {data.fastDelivery ? <p className="card-fastdelivery">Fast Delivery </p>
      : <p className="card-fastdelivery">4 days Delivery </p>}
    </div>
  

    </>
  )
}

export default EachElement