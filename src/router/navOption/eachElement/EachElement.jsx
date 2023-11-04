import React, { useState } from 'react'
import './eachElement.css'

const EachElement = ({data}) => {

  const[cartbutton,setcartbutton]=useState(true)
  return (
    <>
 
    
      <img src={data.thumbnail} alt="Product" className="card-image" />
      <h2 className="card-name">{data.title}</h2>
      
      <p className="card-price fw-bold">${data.price} <span className='mx-5'>{data.discountPercentage}%</span></p>

      <p className={`card-instock ${data.stock > 0 ? 'text-success' : 'text-danger'}`}>{data.stock > 0 ? 'InStock' : 'Out-Of Stock'}</p>
      <div className="card-rating">
        {/* Assuming rating is a number between 1 and 5 */}
        {Array.from({ length: Math.round(data.rating) }, (_, index) => (
          <span key={index} className={`star-icon ${data.rating > 2 ? 'text-success' : 'text-danger'}`}>&#9733;</span>
        ))}
      </div>
     <button onClick={()=>setcartbutton(!cartbutton)} className={`btn btn-${cartbutton?'success':'danger'}`}>{cartbutton?'Add-to-Cart':'Remove-from-Cart'}</button>
     
    
  

    </>
  )
}

export default EachElement