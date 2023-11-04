import React, { memo } from 'react'
import '../categaryOption/categary.css'

const Categaryoption = ({ fun, fixedData }) => {

  const categories = []
  fixedData.forEach(el => {
    categories.push(el.category)
  })

  const filterCategory = new Set(categories)

  const categoryList = [];
  filterCategory.forEach((el)=>{
    categoryList.push(el)
  })



  return (
    <>
      {categoryList.map((el, i) => {
        return (<div className=' ' key={i}>
          <input type="radio" name="option"  id={`${el}`} onClick={(e) => fun(e)} />
          <label htmlFor={`${el}`} className='px-3'>{el}</label>
        </div>)
      })}
    </>
  )
}

export default memo(Categaryoption)