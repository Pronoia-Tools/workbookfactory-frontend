const state = () => {
  return {
    cartItems: [],
  }
}

const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc
      }, 0)
      .toFixed(2)
  },
  cartQuantity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc
    }, 0)
  },
}

const actions = {
  async getCartItems({ commit }) {
    try {
      const response = await this.$axios.$get('/api/v1/cart/')

      if (response) await commit('updateCartItems', response)
    } catch (error) {
      console.log(error.message)
    }
  },

  async addCartItem({ commit }, payload) {
    try {
      const response = await this.$axios.$post('/api/v1/cart/', payload)

      if (response) await commit('updateCartItems', response)
    } catch (error) {
      console.log(error)
    }
  },

  async removeCartItem({ commit }, payload) {
    try {
      const response = await this.$axios.$delete('/api/v1/cart/delete', payload)

      if (response) await commit('updateCartItems', response)
    } catch (error) {
      console.log(error)
    }
  },

  async removeAllCartItems({ commit }, payload) {
    try {
      const response = await this.$axios.$delete(
        '/api/v1/cart/delete/all',
        payload
      )

      if (response) await commit('updateCartItems', response)
    } catch (error) {
      console.log(error)
    }
  },
}

const mutations = {
  updateCartItems(state, response) {
    state.cartItems = response
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
