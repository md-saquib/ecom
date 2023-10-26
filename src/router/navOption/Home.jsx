import React, { useContext } from 'react'
import { userInfo } from '../authContext/AuthContext'
import Filter from '../filter/Filter';
import EachElement from './eachElement/EachElement';

const Home = () => {
  const { state: { data } } = useContext(userInfo);


  return (
    <>
      <div className=" d-flex">
        <Filter/>
        <div className="container m-1 ">
          <div className="cards">
            {data.map((prod) => {
              return <div className='' key={prod.userId}><EachElement data={prod} /></div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home