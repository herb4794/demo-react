import React, { useEffect } from 'react'
import './index.css'

const CartContainer = ({ code,name,clearAll, fetchCart }) => {

  //   useEffect(() => {
  // 
  //   }, [name])
  // const cartData = (JSON.parse(fetchCart()))

  console.log(name)


  return (
    <>
      {/* {

        cartData ? cartData.productName?.map((arr) => {
          return <>
            <div className="d-flex justify-content-between mb-3">

              <span>Product</span>
              <button className='btn btn-danger add' onClick={clearAll()} ><span >Clear All</span> </button>
            </div >

            <div className="row g-2"></div>
            <div className="col-md-3">

              <div key={arr.id} className="card p-2 py-3 text-center">

                <div className="img mb-2">


                </div>

                <h5 className="mb-0">Demo</h5>
                <small>{arr.name}</small>

                <div className="ratings mt-2">

                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                </div>

                <div className="mt-4 apointment">

                </div>

              </div>
            </div>
          </>
        }) : <>

        </>
      } */}

      <div className="d-flex justify-content-between mb-3">

        <span>Product</span>
        <button className='btn btn-danger add' onClick={clearAll()} ><span >Clear All</span> </button>
      </div >

      <div className="row g-2"></div>
      <div className="col-md-3">

        <div key={code} className="card p-2 py-3 text-center">

          <div className="img mb-2">


          </div>

          <h5 className="mb-0">Demo</h5>
          <small>{name}</small>

          <div className="ratings mt-2">

            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>

          </div>

          <div className="mt-4 apointment">

          </div>

        </div>
      </div>


    </>
  )
}

export default CartContainer