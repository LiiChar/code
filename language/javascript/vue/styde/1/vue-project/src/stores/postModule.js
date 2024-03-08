import axios from 'axios'

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По содержанию' },
      { value: 'id', name: 'По индефикатору' }
    ]
  }),
  getters: {
    filterArray(state) {
      return [state.posts].sort((postA, postB) => {
        if (state.selectedSort === 'id' && state.page < state.totalPages) {
          return postA['id'] - postB['id']
        }
        return postA[state.selectedSort]?.localeCompare(postB[state.selectedSort])
      })
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.filterArray.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, bool) {
      state.isPostLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    }
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setPosts', response.data)
        commit('setLoading', true)
      } catch (error) {
        alert('Error')
      }
    },
    async loadMorePost({ state, commit }) {
      commit('setLoading', state.page + 1)

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setPosts', [...state.posts, ...response.data])
        commit('setLoading', true)
      } catch (error) {
        alert('Error')
      }
    }
  },
  namespaced: true
}
