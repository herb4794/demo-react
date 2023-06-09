// import { fetchData } from "../utils/fetchData"
import data from './data.json'
import { fetchProductInfo, fetchOpenInfo  } from './../utils/fetchData';

const productInfo = fetchProductInfo()
const openInfo = fetchOpenInfo()

const openStart = (arr) => {
  const json = JSON.stringify(arr)
  const openSet = () => { localStorage.setItem('open', json) }

  openSet()
}

export const initalState = {
  product: [data.products],
  open: openInfo ? openInfo : [],
  previewData: productInfo,
  openControl: (arr) => {
    openStart(arr)
  }
}
sessionStorage.clear();