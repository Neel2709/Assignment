import React,{useState} from 'react'
import { storage , db } from '../config/Config';
const AddProducts = () => {

    const [productName ,setProductName] = useState('');
    const [productPrice ,setProductPrice] = useState(0);
    const [productDescription ,setProductDescription] = useState('');
    const [productImage ,setProductImage] = useState(null);
    const [error,setError] = useState('');
    const [successMsg,setSuccessMsg] = useState('');

    const [imgError,setImgError] = useState("");

    //Adding product image and check it is png/jpeg 
    const types = ['image/png' , 'image/jpeg' ,'image/jpg'];

    const productImageHandler = (e) => { 
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setProductImage(selectedFile);
            setImgError('');
        }
        else{
            setProductImage(null);
            setImgError("Please select a valid image format !...");
        }
    }

    //Adding product function 
    const addProduct = (e) => {
        e.preventDefault();
        console.log(productName,productPrice,productDescription,productImage);

        const uploadTask = storage.ref(`product-images/${productImage.name}`).put(productImage);
         
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message), () => {
                storage.ref('product-images').child(productImage.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        productDescription : productDescription,
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0);
                        setProductDescription('');
                        document.getElementById('Product_Image').value = '';
                        setError('');
                        setImgError('');
                        setTimeout(()=>{
                            setSuccessMsg('');
                        },3000)
                    }).catch(err => setError(err.message))
                })
            })
    }


  return (
    <div className='col-md-8 mx-auto my-auto align-middle'>
         {successMsg &&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>               
            </>}
        <h1 className='text-center mt-5'>Add Product</h1>
        <form className="w-50 mx-auto mt-5 row g-3 border border-3 rounded-3" onSubmit={addProduct} autoComplete="off">
            <div className="col-md-6">
                <label for="Product Name" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="Product Name" 
                onChange={(e)=> setProductName(e.target.value)} value={productName}/>
            </div>
            <div className="col-md-6">
                <label for="Product price" className="form-label">Product price</label>
                <input type="text" className="form-control" id="Product price" 
                onChange={(e)=> setProductPrice(e.target.value)} value={productPrice}/>
            </div> 
            <div className="col-12">
                <label for="Product Description" className="form-label">Product Description</label>
                <input type="text" className="form-control" id="Product Description" placeholder="" 
                onChange={(e)=> setProductDescription(e.target.value)} value={productDescription}/>
            </div>
            <div className="mb-3">
                <label for="Product Image" className="form-label">Product Image</label>
                <input className="form-control" type="file" id="Product_Image" 
                onChange={productImageHandler}/>
            </div>
            {imgError&&<>
                <br></br>
                <div className='error-msg'>{imgError}</div>
            </>}
            <br></br> 
            <div className="col-12 text-center mb-3">
                <button type="submit" className="btn btn-secondary">Add Product</button>
            </div>
            {error &&<>
                <br></br>
                <div className='error-msg'>{error}</div>
                
            </>}
        </form>
        
    </div>
  )
}

export default AddProducts
