import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-danger text-light mt-5'
    style={{width:'100%', height:'300px'}} >
        <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap ">

            <div style={{width:'400px'}} className="website">

                <h4><i style={{height:'25px'}} className="fa-solid fa-truck-fast me-2"></i>
                E Cart</h4>
                <h6>
                    Designed and built with all the love in the world by the Luminar team with the help of our contributers
                </h6>
                <h6>Code licensed MIT, docs CC BY 3.0</h6>
                <p>Currently v5.3.2.</p>
                
            </div>
            <div className="links d-flex flex-column">
                <h5>Links</h5>
                <Link to={'/Home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'/Cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
                <Link to={'/Wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
            </div>
            <div className="guides d-flex flex-column">
                <h5>Guides</h5>
                <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React</a>
                <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>Routing</a>
                <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
            </div>
            <div className="contact">
                <h5>Contact Us</h5>
                <div className='d-flex'>
                    <input type="text" className='form-control me-1' placeholder='Email ID Please' />
                    <button className='btn btn-warning'><i className='fa-solid fa-arrow-right'></i></button>
                </div>
                <div className='icons d-flex justify-content-between mt-3'>
                    <a href="https://react.dev" target='_blank' style={{textDecoration:'none' ,color:'white'}}>
                    <i class="fa-brands fa-twitter"></i></a>
                    <a href="https://react.dev" target='_blank' style={{textDecoration:'none' ,color:'white'}}>
                    <i class="fa-brands fa-facebook"></i></a>
                    <a href="https://react.dev" target='_blank' style={{textDecoration:'none' ,color:'white'}}>
                    <i class="fa-brands fa-instagram"></i></a>
                    <a href="https://react.dev" target='_blank' style={{textDecoration:'none' ,color:'white'}}>
                    <i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://react.dev" target='_blank' style={{textDecoration:'none' ,color:'white'}}>
                    <i class="fa-brands fa-github"></i></a>
                    <a href="https://react.dev" target='_blank' style={{textDecoration:'none' ,color:'white'}}>
                    <i class="fa-solid fa-envelope"></i></a>
                </div>

            </div>
        </div> 
        <p className='text-center mt-5'>Copyright &copy;2024 E Cart. Built with React</p>       
    </div>
    

        
  )
}

export default Footer