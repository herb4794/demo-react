import React, { memo, useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import { useNavigate } from 'react-router-dom'
import { fetchProductInfo } from '../../utils/fetchData';

const Details = () => {
  const navigate = useNavigate();
  const { previewData } = useStateValue()
  const getinfo = fetchProductInfo()

  useEffect(() => {
    const jsons = JSON.parse(getinfo)
    setJsonData(jsons)
  }, [previewData])

  function backBtn() {
    const goBack = () => {
      navigate(-1);
    }
    goBack()
  }
  const json = JSON.parse(getinfo)
  const [jsonData, setJsonData] = useState(json)

  return (

    <section style={{backgroundColor: '#eee'}}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card text-black">
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img src={jsonData?.images}
                className="card-img-top" alt="#" />
              <div className="card-body" key={previewData?.summary}>
                <div className="text-center">
                  <h5 className="card-title">Believing is seeing</h5>
                  <p className="text-muted mb-4">{jsonData?.name}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>{jsonData?.summary}R</span>
                  </div>
                  <button onClick={() => backBtn()} className="btn btn-danger ">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default memo(Details)