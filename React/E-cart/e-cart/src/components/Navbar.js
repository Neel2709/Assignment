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
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact us</a>
                    </li>
                    
                </ul>
                </div>
                {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className='buttons'>

                    {!user && <>
                        <a href='/login' className='btn btn-outline-dark'>
                        <i class="fa-solid fa-right-to-bracket me-1"></i> Login</a>
                        <a href='/signup' className='btn btn-outline-dark ms-2'>
                        <i class="fa-solid fa-user-plus"></i> Register</a>   
                    </>}
                    {user && <>
                        <a href='/' className='btn btn-outline-dark'>
                        <i class="fa-solid fa-user"></i>{user}</a>
                        <a href='cart' className='btn ms-2'>
                        <i class="fa-solid fa-cart-arrow-down"></i>{cartProducts && <strong><sup>({cartProducts.length})</sup></strong>}</a>
                        <a href='' className='btn btn-outline-dark ms-2' onClick={handleLogOut}>
                        <i class="fa-solid fa-right-from-bracket"></i> Logout</a>
                    </>}

                    {/* <a href='' className='btn btn-outline-dark ms-2'>
                    <i class="fa-solid fa-cart-plus"></i> Cart(0)</a> */}
                </div>
            </div>
        </nav>
                
</div>
  )
}

export default Navbar
