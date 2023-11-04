import React, { useContext, useEffect, useState } from 'react'
import Categaryoption from '../../categaryOption/Categaryoption';
import './filter.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { userInfo } from '../authContext/AuthContext';


const Filter = () => {

  const { dispatch, state: { data, fixedData } } = useContext(userInfo);


  let [count, setcount] = useState({
    number: 75,
    data: []
  });


  const [height, setheight] = useState({})
  const [rating, setrating] = useState(3);

  
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setcount({ ...count, data: data })
      })
  }, [])



  const priceFilter = (e) => {
    const filterprice = fixedData.filter((el) => {
      return el.price < e.target.value
    })

    setcount({ ...count, number: e.target.value })
    dispatch({
      work: 'update-data',
      data: filterprice
    })
  }

  const categoryFilter = (e) => {
    
    const categoryfilter = fixedData.filter((el) => {
      return el.category === e.target.id
    })

    dispatch({
      work:'update-data',
      data: categoryfilter
    })

  }

  return (
    <div className='bg-secondary  m-1 filter'>
      <span className='fs-2 fw-bold brand'>Filter</span>

      <label htmlFor="filterPrice" className='brand fs-5'>Filter Price</label>
      <div className='d-flex justify-content-around align-items-center'>
        <input type="range" name="" id="filterPrice" className="rangebar" max='1800' min='20' onChange={(e) => {
          priceFilter(e)
        }} />
        <span className='fw-bold'>$ {count.number}</span>
      </div>

      <label htmlFor="categary" className='mainoptioncon'
        onMouseOver={() => setheight({ height: 'auto' })}
        onMouseOut={() => setheight({ height: '0px' })}
      >Select Categary
        <div className='optioncontainer' style={height}>
          <Categaryoption data={count.data} fun={categoryFilter} />
        </div>
      </label>
      <label htmlFor="" className='fw-bold ps-5 fs-5 text-light'>Rating :</label>
      <span>{[...Array(5)].map((_, i) =>
        <span key={i} onClick={() => setrating(i + 1)}> {rating > i ? <AiFillStar /> : <AiOutlineStar />}</span>
      )}</span>

      <button className='btn btn-light m-4 fw-bold w-75'>Clear Filter</button>

    </div>
  )
}
export default Filter;




