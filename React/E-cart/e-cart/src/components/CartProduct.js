import React from 'react'
import IndividualCartProduct from './IndividualCartProduct'

const CartProduct = ({cartProducts,cartProductIncrease,cartProductDecrease}) => {
  return cartProducts.map((cartProduct)=>(
    <IndividualCartProduct key={cartProduct.ID} cartProduct={cartProduct} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease}/>
  ))
}

export default CartProduct
