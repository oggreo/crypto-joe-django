
export const state = () => ({
  selectedProduct: {},
  basket: []
})

export const mutations = {
  SET_PRODUCT (state, product) {
    state.selectedProduct = product
  },
  ADD_BASKET (state, product) {
    state.basket.push(product)
  },
  LOAD_BASKET (state, basket) {
    state.basket = basket
  },
  CLEAR_BASKET (state, basket) {
    state.basket = []
  },
  REMOVE_PRODUCT_FROM_BASKET (state, productIndex) {
    state.basket.splice(productIndex, 1)
  }
}

export const actions = {
  setProduct ({ commit }, product) {
    return commit('SET_PRODUCT', product)
  },
  addBasket ({ commit }, product) {
    return commit('ADD_BASKET', product)
  },
  clearBasket ({ commit }) {
    return commit('CLEAR_BASKET')
  },
  loadBasket ({ commit }, basket) {
    return commit('LOAD_BASKET', basket)
  },
  removeFromBasket ({ commit }, productIndex) {
    return commit('REMOVE_PRODUCT_FROM_BASKET', productIndex)
  }
}

export const getters = {
  getCurrentProduct: (state) => {
    return state.selectedProduct
  }
}
