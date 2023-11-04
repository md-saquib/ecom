import React, { useContext } from 'react'
import { userInfo } from '../authContext/AuthContext'
import Filter from '../filter/Filter';
import EachElement from './eachElement/EachElement';
import './eachElement/eachElement.css'


const Home = () => {
  const { state: { data } } = useContext(userInfo);

  return (
    <>
      <div className=" d-flex">
        <Filter />
        <div className="cards">
          
            {data.map((prod) => {
              return <div className="card" key={prod.id}><EachElement data={prod} />   </div>
            })}
       
        </div>
      </div>
    </>
  )
}

export default Home