export const fetchProductInfo = () => {
  const productInfo =
    localStorage.getItem('productInfo')

  return productInfo ? productInfo : [];
}

export const fetchOpenInfo = () => {
  const openInfo =
    localStorage.getItem('open')

  return openInfo ? openInfo : [];
}
