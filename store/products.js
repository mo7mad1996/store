const data = {
  products: [],
  ok: false,
}

const state = () => Object.assign({}, data),
  getters = {
    products: (state) => state.products,
    ok: (state) => state.ok,
  },
  mutations = {
    setProducts(state, data) {
      state.products = data
    },
    addProducts(state, data) {
      state.products.push(data)
    },
    submit(state) {
      state.ok = !state.ok
    },
  },
  actions = {
    addProducts({ commit, state }, product) {
      let products = state.products.filter((el) => el.code == product.code)
      // ,newProduct = Object.assign()
      if (products.length) {
        this.$axios.$put('products/' + products[0].id, product).then(() => {
          this.$axios.$get('products').then((res) => {
            commit('setProducts', res)
            commit('submit')
          })
        })
      } else {
        this.$axios.$post('products', product).then((res) => {
          commit('addProducts', res)
          commit('submit')
        })
      }
    },
  }

const store = {
  state,
  getters,
  mutations,
  actions,
}

export default store
