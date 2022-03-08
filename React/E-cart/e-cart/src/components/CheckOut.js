import React from 'react'
import { auth , db } from '../config/Config'
import {getDocs} from  'firebase/firestore';

const CheckOut = (cartProduct) => {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        auth.onAuthStateChanged(async user => {
            const data = await getDocs(db.collection('cart '+user.uid));
            data.docs.forEach(singleUser => {
                db.collection('cart '+user.uid).doc(singleUser.id).delete().then(()=>{
                    window.location = '/';
                })
            })
            alert("Order Placed Successfully .."); 
          })
    }


  return (
    <div>
         <h1 className='text-center mt-5'>Manage Address </h1>

        <form className="w-50 mx-auto mt-5 row g-3 border border-3 rounded-3" onSubmit={handleSubmit} autoComplete="off">
            <div className="col-md-12">
                <label for="Address" className="form-label">Address</label>
                <input type="text" className="form-control" id="Address" required/>
            </div>
            <div className="col-md-12">
                <label for="Contact Number" className="form-label">Contact Number</label>
                <input type="number" className="form-control" id="Contact Number" required/>
            </div>

            <div className="col-12 text-center mb-1">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default CheckOut
