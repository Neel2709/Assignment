import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import Products from './Products'
import { auth , db } from '../config/Config'
import "../index.css" 
const Home = (props) => {

  //Getting current user id 

  function GetUserId(){
    const [uid,setUid] = useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user => {
        if(user){
          setUid(user.uid);
        }
      })
    },[])
    return uid ;
  }

  const uid = GetUserId();

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
  // console.log(user);


  //Getting products
  const [products,setProducts] = useState([]);

  const getProducts = async () =>  { 
    const products = await db.collection('Products').get();
    const productsArray = [];
    for(var snap of products.docs){
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data
      })
      if(productsArray.length === products.docs.length){
        setProducts(productsArray);
      }
    }

  }

  useEffect(() => {
    getProducts();
  },[])

  //add to cart

  let Product;
  const addToCart = (products) => {
    if(uid != null){
      Product = products ; 
      Product['Qty'] = 1 ;
      Product['TotalProductPrice'] = Product.Qty * Product.ProductPrice;

      //create collection for cart 

      db.collection('cart ' + uid).doc(products.ID).set(Product).then(()=>{
        alert("Product successfully added to cart..");
      })
    }
    else{
      window.location = '/login';
    }
  }

  return (
    <div>
        <Navbar user={user} />
        <br></br>
        {products.length > 0 && (
          <div className='container-fluid'>
            <h1 className='text-center'>Products</h1>
            <div className="container">
              <div className="row">
                <Products products={products} addToCart={addToCart} />
              </div>
            </div>
          </div>
        )}
        {products.length < 1 && (
          <div className='container-fluid'>Please wait....
          </div>
        )}
    </div>
  )
}

export default Home
