const state = () => {
  return {
    listImages: [],
  }
}

const getters = {
  getLibraries(state) {
    return state.listImages
  },
}

const actions = {
  async getLibrariesImages({ commit }, payload) {
    try {
      const images = await this.$axios.$get('api/v1/images')

      if (images) {
        await commit('setList', images)
      }
    } catch (error) {
      console.log(error.message)
    }
  },

  async uploadImage({ commit }, payload) {
    try {
      const response = await this.$axios.$post('api/v1/images', payload)
      if (response) {
        await commit('addToList', response)
      }
    } catch (error) {
      console.log(error.message)
    }
  },
}

const mutations = {
  setList(state, response) {
    state.listImages = response
  },

  addToList(state, response) {
    state.listImages = [...[response], ...state.listImages]
  },

  reloadList() {},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
