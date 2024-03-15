import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'



function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  useEffect(()=>
  {
    if(cartItems?.length>0)
    {
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }
    else
    {
      setCartTotal(0)
    }
  },[cartItems])

  const handleDecrementQuantity = (product)=>
  {
    if (product.quantity>1)
    {
      dispatch(decQuantity(product.id))
    }
    else
    {
      dispatch(removeCartItem(product.id))
    }
  }


  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:'100px'}}>
      {
        cartItems?.length>0?
      <div className='pt-5'>
        <h1>Cart Summary</h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems?.map((product,index)=>(
                  <tr>
                  <td>{index+1}</td>
                  <td>{product.title.slice(0,16)}...</td>
                  <td><img width={'60px'} height={'60px'} src={product.thumbnail} alt="" /></td>
                  <td>
                    <div className='d-flex'>
                      <button onClick={()=>handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
                      <input value={product.quantity} style={{width:'50px'}} className='form-control' type="text" placeholder='0' readOnly />
                      <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bolder'>+</button>
                    </div>
                  </td>
                  <td>${product.totalPrice}</td>
                  <td>
                    <button onClick={()=>dispatch(removeCartItem(product.id))} className='btn'><i className='fa-solid fa-trash text-primary'></i></button>
                  </td>
                </tr>
                ))
                }
              </tbody>
            </table>
            <div className='float-end mt-3'>
              <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>EMPTY CART</button>
              <Link className="btn btn-info ms-5" to={'/'}>Shop More</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='shadow border rounded p-4'>
              <h5>Total Items: <b className='text-primary'>{cartItems?.length}</b></h5>
              <h4>Total Amount: <b className='text-primary'>$ {cartTotal}</b></h4>
              <div className='d-grid mt-4'>
                <button className='btn btn-success'>Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center flex-column'>
        <img className='img-fluid' width={'400px'} src="https://thumbs.dreamstime.com/b/shopping-cart-cloud-online-digital-marketing-ideas-cartoon-basket-shop-promotional-label-labels-white-background-286074095.jpg" alt="" />
        <h3>Your Cart is Empty!!!</h3>
      </div>
      }
      </div>
    </>
  )
}

export default Cart