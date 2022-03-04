import React from 'react'
import { auth , db } from '../config/Config'

const IndividualCartProduct = ({cartProduct,cartProductIncrease,cartProductDecrease}) => {
    const handleCartProductIncrease = () =>{
        cartProductIncrease(cartProduct);
    }

    const handleCartProductDecrease = () =>{
        cartProductDecrease(cartProduct);
    }

    //Delete the Product
    const DeleteProduct = () => {
        auth.onAuthStateChanged(user => {
            if(user){
                db.collection('cart '+user.uid).doc(cartProduct.ID).delete().then(()=>{
                    alert("Product deleted successfully");
                })
            }
        })
    }
  return (
        <div className="card rounded-3 mb-4">
            <div className="card-body p-4">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                        <img src={cartProduct.ProductImage}
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{cartProduct.ProductName}</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button className="btn btn-link px-2"
                        onClick={handleCartProductDecrease}>
                        <i className="fas fa-minus"></i>
                        </button>

                        <input id="form1" min="0" name="quantity" value={cartProduct.Qty} type="number"
                        className="form-control form-control-sm" disabled/>

                        <button className="btn btn-link px-2"
                        onClick={handleCartProductIncrease}>
                        <i className="fas fa-plus"></i>
                        </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">Rs. {cartProduct.TotalProductPrice}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger" onClick={DeleteProduct}><i className="fas fa-trash fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default IndividualCartProduct
