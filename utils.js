// eslint-disable-next-line import/prefer-default-export
export function uuid () {
  return Math.random().toString(16).slice(2)
}

export function saveStatePlugin (store) {
  store.subscribe(
    (mutation, state) => {
      if (process.client) {
        localStorage.setItem('basket', JSON.stringify(state.products.basket))
      }
    }
  )
}
