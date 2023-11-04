import React, { memo } from 'react'
import '../categaryOption/categary.css'

const Categaryoption = ({ data,fun }) => {
  // console.log(data);
  return (
    <>
      {data.map((el, i) => {
        return( <div className=' ' key={i}>
                <input type="radio"  name="option" id={`${el}`} onClick={(e)=> fun(e)} />
                <label htmlFor={`${el}`} className='px-3'>{el}</label>
        </div>)
      })}
    </>
  )
}

export default memo(Categaryoption)