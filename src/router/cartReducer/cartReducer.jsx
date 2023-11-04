import React from 'react'

const cartReducer = (state, action) => {
  // console.log(state)
  switch (action.work) {
    case 'update-data':
      if (action.data.length == 30)
        return { ...state, data: action.data, fixedData: action.data }
      else
        return { ...state, data: action.data }
  }

  return (
    <div>cartReducer</div>
  )
}

export default cartReducer