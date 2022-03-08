import React from 'react'
import { auth } from '../config/Config'

const Navbar = ({user,cartProducts}) => {

    const handleLogOut = () => {
        auth.signOut().then(() => {
            window.location = '/login';
        });
    }

    // console.log(cartProducts.length);
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">E-Mart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
                <div className='buttons'>

                    {!user && <>
                        <a href='/' className='btn btn-outline-dark me-2'>
                        <i className="fa fa-home"></i> Home</a>
                        <a href='/login' className='btn btn-outline-dark'>
                        <i className="fa-solid fa-right-to-bracket me-1"></i> Login</a>
                        <a href='/signup' className='btn btn-outline-dark ms-2'>
                        <i className="fa-solid fa-user-plus"></i> Register</a>   
                    </>}
                    {user && <>
                        <a href='/' className='btn btn-outline-dark me-2'>
                        <i className="fa fa-home"></i> Home</a>
                        <a href='/' className='btn btn-outline-dark'>
                        <i className="fa-solid fa-user"></i>{user}</a>
                        <a href='cart' className='btn btn-outline-dark ms-2'>
                        <i className="fa-solid fa-cart-arrow-down"></i>{cartProducts && <strong><sup>({cartProducts.length})</sup></strong>}</a>
                        <a href='' className='btn btn-outline-dark ms-2' onClick={handleLogOut}>
                        <i className="fa-solid fa-right-from-bracket"></i> Logout</a>
                    </>}
                </div>
            </div>
        </nav>
                
</div>
  )
}

export default Navbar
