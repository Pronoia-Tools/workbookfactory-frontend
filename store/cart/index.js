const state = () => {
  return {
    products: [],
    cart: [],
    isShowMessage: false,
  }
}

const getters = {
  getCart(state) {
    return state.cart
  },
  getMessage(state) {
    return state.isShowMessage
  },
}

const actions = {
  addWorkbookToCart({ state, commit }, workbook) {
    // find item
    const cartItem = state.cart.find((item) => item.id === workbook.id)

    if (!cartItem) {
      commit('setMessage', false)
      commit('pushWorkbookToCart', workbook)
    } else {
      commit('setMessage', true)
    }
  },

  incrementQuantity({ commit }, itemId) {
    commit('incrementItemQuantity', itemId)
  },

  decrementQuantity({ commit }, itemId) {
    commit('decrementItemQuantity', itemId)
  },

  removeWorkbook({ commit }, itemId) {
    commit('removeWorkbookFromCart', itemId)
  },
}

const mutations = {
  pushWorkbookToCart(state, workbook) {
    state.cart.push({
      id: workbook.id,
      quantity: 1,
      workbook,
    })
  },

  incrementItemQuantity(state, itemId) {
    const newCart = [...state.cart]

    newCart.forEach((item) => {
      if (item.id === itemId) {
        item.quantity += 1
      }
    })

    state.cart = [...newCart]
  },

  decrementItemQuantity(state, itemId) {
    const newCart = [...state.cart]

    newCart.forEach((item) => {
      if (item.id === itemId) {
        item.quantity -= 1
      }
    })

    state.cart = [...newCart]
  },

  removeWorkbookFromCart(state, itemId) {
    const newCart = state.cart.filter((item) => item.id !== itemId)

    state.cart = [...newCart]
  },

  setMessage(state, payload) {
    state.isShowMessage = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
