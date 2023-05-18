import React, { memo, useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import { useNavigate } from 'react-router-dom'
import { fetchProductInfo } from '../../utils/fetchData';

const Details = () => {
  const navigate = useNavigate();
  const { previewData, open } = useStateValue()

  function backBtn() {
    const goBack = () => {
      navigate(-1);
    }
    goBack()
  }
  const json = JSON.parse(previewData)
  const [jsonData, setJsonData] = useState(json)
  
  useEffect(() => {
    const getinfo = fetchProductInfo()
    const jsons = JSON.parse(getinfo)
    setJsonData(jsons)
  }, [previewData])
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <img src={jsonData?.images} />

          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            {jsonData?.summary}
          </p>

          <button onClick={() => backBtn()} type="button" className='bg-gradient-to-br from-orange-400
         to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg 
         transition-all ease-in-out duration-100'>
            Back
          </button>
        </div>
        <div className="py-2 flex-1 flex items-center relative">

          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
            <div key={previewData?.summary} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
              <img src={jsonData?.images} />
              <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                {jsonData?.name}
              </p>
              <p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                {jsonData?.summary}
              </p>

            </div>
          </div>
        </div>
      </div>

    </section>

  )
}

export default memo(Details)