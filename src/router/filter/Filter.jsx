import React, { useContext, useState } from 'react'
import Categaryoption from '../../categaryOption/Categaryoption';
import './filter.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { userInfo } from '../authContext/AuthContext';


const Filter = () => {

  const { dispatch, state: { fixedData } } = useContext(userInfo);


  let [count, setcount] = useState(75);


  const [height, setheight] = useState({})
  const [rating, setrating] = useState(4);


  const priceFilter = (e) => {
    const filterprice = fixedData.filter((el) => {
      return el.price < e.target.value
    })

    setcount( e.target.value )
    dispatch({
      work: 'update-data',
      data: filterprice
    })
  }

  const categoryFilter = (e) => {

    console.log(e.target.checked);
    const categoryfilter = fixedData.filter((el) => {
      return el.category === e.target.id
    })

    dispatch({
      work: 'update-data',
      data: categoryfilter
    })

  }

  const ratingFilter = (i) => {

    const ratingfilter = fixedData.filter((el) => {
      return Math.round(el.rating) === i
    })

    setrating(i)
    dispatch({
      work: 'update-data',
      data: ratingfilter
    })

  }

  const clearFilter = ()=>{

    setrating(4)
    setcount(75)
    dispatch({
      work: 'update-data',
      data: fixedData
    })
  }

  return (
    <div className='bg-secondary  m-1 filter'>
      <span className='fs-2 fw-bold brand'>Filter</span>

      <label htmlFor="filterPrice" className='brand fs-5'>Filter Price</label>
      <div className='d-flex justify-content-around align-items-center'>
        <input type="range" name="" id="filterPrice" value={`${count}`} className="rangebar" max='1800' min='20' onChange={(e) => {
          priceFilter(e)
        }} />
        <span className='fw-bold'>$ {count}</span>
      </div>

      <label htmlFor="categary" className='mainoptioncon'
        onMouseOver={() => setheight({ height: 'auto' })}
        onMouseOut={() => setheight({ height: '0px' })}
      >Select Categary
        <div className='optioncontainer' style={height}>
          <Categaryoption fun={categoryFilter} fixedData={fixedData} />
        </div>
      </label>
      <label htmlFor="" className='fw-bold ps-5 fs-5 text-light'>Rating :</label>
      <span>{[...Array(5)].map((_, i) =>
        <span key={i} onClick={() => ratingFilter(i+1) }> {rating > i ? <AiFillStar /> : <AiOutlineStar />}</span>
      )}</span>

      <button className='btn btn-light m-4 fw-bold w-75' onClick={clearFilter }>Clear Filter</button>

    </div>
  )
}
export default Filter;




