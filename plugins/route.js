export default ({ app, store }) => {
  if (process.client) {
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    store.dispatch('products/loadBasket', basket)
  }
}
