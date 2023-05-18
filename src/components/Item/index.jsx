import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {

  const { code, name, images, priceList, summary, preview, open } = props

  const [select, setSelect] = useState(false)

  const [changes, setChanges] = useState()

  const [mouse, setMouse] = useState(false)

  const [resultChose, setResultChose] = useState()

  useEffect(() => {
    setResultChose(open)
  }, [mouse])

  const handleMouse = (id) => {
    return () => {
      const data = JSON.parse(resultChose)
      console.log(data);
      console.log(resultChose);
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
        if (sessionResult === changes && sessionResult !== null) {
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
  const handleClick = () => {
    return () => {
      if (select === true) {
        setSelect(false)
      }
      if (select === false) {
        setSelect(true)
      }
    }
  }

  const handlePreview = (name, images, summary) => {
    preview(name, images, summary)
  }

  console.log("mouse is :" + mouse);
  console.log("select is :" + select);

  return (
    <div className="card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src={images[0].url} className="img-fluid" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </div >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link onClick={() => handlePreview(code, images[0].url, summary)} to={'/Details'} className="btn btn-primary">Detail</Link>
        <p className="card-text">The road to truth is long and arduous,
          And the philosopher must forge ahead alone.
          But in his mind, thoughts and ideas take wing,
          Free to roam and soar, unshackled by convention.</p>
      </div>
      <button type='button' onClick={handleMouse(code)} style={{ backgroundColor: mouse ? 'orange' : '#bbb', backgroundColor: chose(code) || mouse ? 'orange' : '#bbb' }}>preview</button>
      {
        mouse || chose(code) ? (
          <div>
            {
              priceList[0].value
            }
            <br />
            <button type="button" onClick={handleClick()} style={{ backgroundColor: select ? 'orange' : '#ddd' }}> select</button>
          </div>
        ) : ''
      }
    </div >




  )
}

export default Item
