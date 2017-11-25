import * as types from '../mutation-types'

// 全局状态
const state = {
    loading: false
}

// getters
const getters = {
    loading: state => state.loading
}

// actions
const actions = {
    checkout({ commit, state }, products) {
        const savedCartItems = [...state.added]
        commit(types.CHECKOUT_REQUEST)
        shop.buyProducts(
            products,
            () => commit(types.CHECKOUT_SUCCESS),
            () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
        )
    }
}

// mutations
const mutations = {
    [types.SHOW_LOADING](state) {
        state.loading = true
    },

    [types.HIDE_LOADING](state) {
        state.loading = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}