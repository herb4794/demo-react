import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchOpenInfo } from '../../utils/fetchData'

const Item = (props) => {
  const openData = fetchOpenInfo()

  const { code, name, images, priceList, summary, preview, setCart, clearCart } = props

  const [select, setSelect] = useState(Boolean)

  const [changes, setChanges] = useState()

  const [mouse, setMouse] = useState(Boolean)

  const [selectRead, setSelectRead] = useState()

  useEffect(() => {

  }, [mouse])

  setTimeout(() => {
    fetchOpenInfo()
  }, 300);

  const handleMouse = (id) => {
    return () => {
      console.log();
      const data = JSON.parse(openData)
      const getArr = data.filter((arr) => {
        return arr.id === id
      })
      const codeString = getArr[0].id.toString()
      const setSession = () => sessionStorage.setItem(codeString, codeString)
      setSession()
      const sessionResult = sessionStorage.getItem(id)

      setChanges(sessionResult)

      if (mouse === true) {
        setMouse(false)
        if (sessionResult === changes) {
          sessionStorage.removeItem(changes)
        }
      }
      if (mouse === false) {
        setMouse(true)
      }
    }
  }

  const chose = (id) => {
    return sessionStorage.getItem(id)

  }

  const choseSelect = (name) => {
    return sessionStorage.getItem(name)
  }


  const handleClick = (name, id) => {
    return () => {
      const setSession = () => sessionStorage.setItem(name, name)
      setSession()
      const sessionResult = sessionStorage.getItem(name)
      setSelectRead(sessionResult)
      const nameObj = {
        id: id,
        name: name
      }
      setCart(nameObj)

      if (select === true) {
        setSelect(false)
        if (selectRead === sessionResult)
          clearCart(id)
        sessionStorage.removeItem(selectRead)

      }
      if (select === false) {
        setSelect(true)
      }
    }
  }

  const handlePreview = (name, images, summary) => {
    preview(name, images, summary)
  }

  return (
    <div>

      <div className="card" style={{ backgroundColor: choseSelect(name) ? '#bbb' : 'white' }}>
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src={images[0].url} className="img-fluid" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div >
        <div className="card-body" key={code}>
          <h5 className="card-title">{name}</h5>
          <Link onClick={() => handlePreview(code, images[0].url, summary)} to={'/Details'} className="btn btn-primary">Detail</Link>
          <p className="card-text">The road to truth is long and arduous,
            And the philosopher must forge ahead alone.
            But in his mind, thoughts and ideas take wing,
            Free to roam and soar, unshackled by convention.</p>
        </div>
        <input type="checkbox" className="btn-check" id="btn-check" />
        <label onClick={handleMouse(code)} className="btn btn-primary" style={{ backgroundColor: chose(code) ? 'orange' : '#bbb' }} htmlFor="btn-check">PerView</label>
        {
          chose(code) ? (
            <div>
              {
                priceList[0].value
              }
              <br />
              <input type="checkbox" className="btn-check" id="btn-select" />
              <label onClick={handleClick(name, code)} className="btn btn-success" style={{ backgroundColor: choseSelect(name) ? 'red' : '#ccc' }} htmlFor="btn-select">Select</label>
            </div>
          ) : ''
        }

      </div >
    </div >

  )
}

export default Item
