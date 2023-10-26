import React, { createContext, useReducer, useState } from 'react'
import { faker } from '@faker-js/faker'
import cartReducer from '../cartReducer/cartReducer';

export const userInfo = createContext();

const AuthContext = ({ children }) => {
    const [loginInfo, setLoginInfo] = useState({
        userName: '',
        password: '',
        conformPassword: ''
    })

    const product = [...Array(100)].map((prod) => ({
        userId: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        fastDelivery: faker.datatype.boolean(),
        instock: faker.helpers.arrayElement([0, 3, 5, 7, 9]),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }))
    const [state,dispatch]=useReducer(()=> cartReducer(),{
        data:product,
        cart:[]
    })
    return (
        <>

            <userInfo.Provider value={{ loginInfo, setLoginInfo ,state,dispatch }}>
                {children}
            </userInfo.Provider>

        </>
    )
}

export default AuthContext