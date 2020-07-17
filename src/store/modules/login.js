const state = {
    token: '',
    username: '',
    authCode: '',
    name: '',
}
const result = {
    code: 200,
    message: '操作成功'
}

const getters = {
    getToken: state => state.token,
    getUsername: state => state.username,
    getAuthCode: state => state.authCode
}
const actions = {
    getToken: ({ commit }) => commit('setToken', '123213'),
}
const mutations = {
    setToken(state, data){
        state.token = data
    },
    setUsername(state, data){
        state.username = data
    },
    setAuthCode(state, data){
        state.authCode = data
    },
    changeNameByLogin(state, data){
        state.name = data
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}