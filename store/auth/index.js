import Cookies from 'js-cookie'
import { jwtDecrypt } from '../../shared/jwt.js'

const state = () => {
  return {
    authData: {
      token: '',
      refreshToken: '',
      tokenExp: '',
    },
    isLoggedIn: false,
    isLoading: false,
  }
}

const getters = {
  getLoginStatus(state) {
    return state.isLoggedIn
  },
  getAuthData(state) {
    return state.authData
  },
  getIsLoading(state) {
    return state.isLoading
  },
}

const actions = {
  async login({ commit }, payload) {
    try {
      await commit('setLoading', true)
      const response = await this.$axios
        .$post('/api/token/', payload)
        .catch((error) => {
          console.log(error)
        })
      await commit('saveTokenData', response)
      await commit('setLoading', false)
    } catch (error) {
      await commit('setLoading', false)
      console.log('Login error: ', error)
    }
  },

  logout({ commit }) {
    commit('removeTokenData')
  },
}

const mutations = {
  saveTokenData(state, response) {
    Cookies.set('access_token', response.access)
    Cookies.set('refresh_token', response.refresh)
    Cookies.set('is_logged_in', !!response.access)

    const jwtDecodedValue = jwtDecrypt(response.access)

    const newTokenData = {
      token: response.access,
      refreshToken: response.refresh,
      tokenExp: jwtDecodedValue.exp,
    }

    state.authData = newTokenData
    state.isLoggedIn = !!response.access
  },

  setLoading(state, payload) {
    state.isLoading = payload
  },

  removeTokenData(state) {
    state.isLoggedIn = false
    state.authData = {
      token: '',
      refreshToken: '',
      tokenExp: '',
    }
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
    Cookies.remove('is_logged_in')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
