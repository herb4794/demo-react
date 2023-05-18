import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import ReactPaginate from 'react-paginate'
import Item from '../Item'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const List = () => {

  const { product, openControl, open } = useStateValue()
  const [productsItem, setProductsItem] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [openResult, setOpenResult] = useState()

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

  const openArr = product[0].map((arr) => {
    return { id: arr.code }

  })

  openControl(openArr)


  return (
    <div className="bg-white">
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
              />
            }
            )
          }
        </div >

      </div>
      <div className='group'>
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(product[0].length / postsPerPage)}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          containerClassName={'pagination'}
          pageLinkClassName={'page-number'}
          previousLinkClassName={'page-number'}
          nextLinkClassName={'page-number'}
          activeLinkClassName={'active'}
        />
      </div>


      <Footer />
      <Outlet />
    </div >

  )
};

export default List