import React from 'react'

const IndividualProduct = ({individualProduct,addToCart}) => {
    // console.log(individualProduct);
    
    const handleAddToCart = () => {
        addToCart(individualProduct);
    }

  return (
    <div className="col-sm-4 mb-2">
    <div className="card">
        <img className="card-img-top embed-responsive-item" style={{height : "30rem"}} src={individualProduct.ProductImage} alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{individualProduct.ProductName}</h5>
            <p className="card-text">{individualProduct.ProductPrice}</p>
            <a className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</a>
        </div>
    </div>
    </div>
  )
}

export default IndividualProduct
