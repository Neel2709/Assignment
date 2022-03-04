import React from 'react'

const IndividualProduct = ({individualProduct,addToCart}) => {
    // console.log(individualProduct);
    
    const handleAddToCart = () => {
        addToCart(individualProduct);
    }

  return (
    <div class="col-sm-4 mb-2">
    <div class="card">
        <img className="card-img-top embed-responsive-item" style={{height : "30rem"}} src={individualProduct.ProductImage} alt="Card image cap"></img>
        <div class="card-body">
            <h5 class="card-title">{individualProduct.ProductName}</h5>
            {/* <p class="card-text">{individualProduct.ProductDescription}</p> */}
            <p class="card-text">{individualProduct.ProductPrice}</p>
            <a class="btn btn-primary" onClick={handleAddToCart}>Add To Cart</a>
        </div>
    </div>
    </div>
  )
}

export default IndividualProduct
