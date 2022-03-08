import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import { auth , db } from '../config/Config'
import CartProduct from './CartProduct'

const ProdDesc = () => {

  //Getting current user 

  function GetCurrentUser(){

    const [user,setUser] = useState(null);

    useEffect(()=>{
      auth.onAuthStateChanged(user => {
        if(user){
          db.collection('Users').doc(user.uid).get().then(snapshot => {
            setUser(snapshot.data().FullName);
          })
        }
        else{
          setUser(null);
        }
      })
    },[])
    return user;
  }

  const user = GetCurrentUser();

  //Getting cart products

  const [cartProducts,setCartProducts] = useState([]);

  useEffect(()=>{
    auth.onAuthStateChanged(user => { 
      if(user){
        db.collection('cart ' + user.uid).onSnapshot(snapshot=>{
          const newCartProduct = snapshot.docs.map((doc)=>({
            ID : doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct); 
        })         
      }
      else{
        console.log("User is not Logged in ");
      }
    })
  },[])

 

  //GEtting the Product wise Quantity from the cart 

  const qty = cartProducts.map(cartProducts => {
    return cartProducts.Qty;  
  })

  //Getting total quantity using reduce method

  const reduceqty = (accumulator, currentValue) => accumulator + currentValue ; 

  const TotalQty = qty.reduce(reduceqty,0);


  //Computing total price 

  const price = cartProducts.map(cartProducts => {
    return cartProducts.TotalProductPrice;  
  })

  const reduceprice = (accumulator, currentValue) => accumulator + currentValue ; 

  const TotalPrice = price.reduce(reduceprice,0);

  // console.log(TotalPrice);

  

  //Increment Function 

  let Product;

  const cartProductIncrease = (cartProducts) => {
    Product=cartProducts;
    Product.Qty= Product.Qty+1;
    Product.TotalProductPrice = Product.Qty * Product.ProductPrice;

    auth.onAuthStateChanged(user => {
      if(user){
        db.collection('cart '+user.uid).doc(cartProducts.ID).update(Product).then(()=>{
        })
      }
      else{
        console.log("User is not Logged in : ");
      }
    })
  }

  const cartProductDecrease = (cartProducts) => {
    
   Product=cartProducts;
   if(Product.Qty>1){
    Product.Qty= Product.Qty-1;
    Product.TotalProductPrice = Product.Qty * Product.ProductPrice;
    auth.onAuthStateChanged(user => {
      if(user){
        db.collection('cart '+user.uid).doc(cartProducts.ID).update(Product).then(()=>{
        })
      }
      else{
        console.log("User is not Logged in : ");
      }
    })
   }
 }


 const handleCheckOut = () => {
      setTimeout(() => {
         window.location = '/payment';
      }, 1000);
 }


  return (
    <div>
      <Navbar user={user} cartProducts={cartProducts} />
      
      {cartProducts.length > 0 && (
        <div className='container-fluid'>
        <h1 className='text-center'>Shopping Cart</h1>
        <div className="container">
          <div className="row">
            <CartProduct cartProducts={cartProducts} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease} />
          </div>
        </div>
        <div className="container-fluid col-md-4">
                <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Total Quantity
                            <span><strong>{TotalQty}</strong></span>
                        </li>
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                            Total amount
                            <p className="mb-0">(including VAT)</p>
                            </div>
                            <span><strong>{TotalPrice}</strong></span>
                        </li>
                        </ul>

                        <button type="submit" className="container-fluid btn btn-primary btn-lg btn-block" onClick={handleCheckOut}>
                        Manage Address
                        </button>
                    </div>
                </div>
            </div>


      </div>
      )}

    {cartProducts.length < 1 && (
      <div className='container-fluid'>Please wait ...</div>
    )}

    </div>
  )
}

export default ProdDesc
