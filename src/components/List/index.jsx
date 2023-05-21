import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import ReactPaginate from 'react-paginate'
import Item from '../Item'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { fetchOpenInfo } from '../../utils/fetchData'

const openData = fetchOpenInfo()

const List = () => {

  const state = {
    productName: [
      { name: "product 1", id: "1" }
    ]
  }

  const { product, open } = useStateValue()
  const [productsItem, setProductsItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [openResult, setOpenResult] = useState(openData)
  const [cartStatus, setCartStatus] = useState(state)
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product[0].slice(indexOfFirstPost, indexOfLastPost);
    setProductsItem(currentPosts)
    setOpenResult(open)

  }, [currentPage])
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const preview = (code, images, summary) => {
    const pushData = { code: code, images: images, summary: summary }
    const setStore = () => {
      localStorage.setItem("productInfo", JSON.stringify(pushData))
    }
    setStore()
  }

  const setCart = (name) => {
    const { productName } = cartStatus

    const updateProductName = [name, ...productName]

    setCartStatus({ productName: updateProductName })


    localStorage.setItem("cart", JSON.stringify(cartStatus))
  }

  const clearCart = (id) => {
    const { productName } = cartStatus
    const clearProduct = productName.filter((cartObj) => {
      return cartObj.id !== id
    })
    setCartStatus({ productName: clearProduct })
  }

  setTimeout(() => {
    setOpenResult(openData)
  }, 200);

  return (
    <div className="container-full">
      <Header />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            productsItem?.map((product) => {
              return <Item
                key={product.code}
                {...product}
                preview={preview}
                open={openResult}
                setCart={setCart}
                clearCart={clearCart}
              />
            }
            )
          }
        </div >

      </div>
      <nav className='text-center' aria-label="Page navigation example">
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(product[0].length / postsPerPage)}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          containerClassName={'pagination justify-content-center'}
          pageLinkClassName={'page-link'}
          previousLinkClassName={'page-number'}
          nextLinkClassName={'page-number'}
          activeLinkClassName={'active'}
        />
      </nav >

      <Footer />
      <Outlet />
    </div >

  )
};

export default List