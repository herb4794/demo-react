import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../context/StateProvider'
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

      if (sessionResult === changes) {
        sessionStorage.removeItem(changes)
        if (mouse === true) {
          setMouse(false)
        }
        if (mouse === false) {
          setMouse(true)
        }
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

  return (
    <div className='group'>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={images[0].url}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{priceList.value}</p>
      <Link onClick={() => handlePreview(code, images[0].url, summary)} to={'/Details'}>Details</Link>
      <div>
        <button type='button' onClick={handleMouse(code)} style={{ backgroundColor: mouse ? 'orange' : '#bbb', backgroundColor: chose(code) || mouse ? 'orange' : '#bbb' }}>preview</button>
        {
          mouse || chose(code) ? (
            <div>
              {
                code
              }
              <br />
              <button type="button" onClick={handleClick()} style={{ backgroundColor: select ? 'orange' : '#ddd' }}> select</button>
            </div>
          ) : ''
        }
      </div>

    </div>

  )
}

export default Item
