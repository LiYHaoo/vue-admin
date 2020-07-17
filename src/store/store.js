import Vue from 'vue'
import Vuex from 'vuex'
//import login from './modules/login'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/) // 动态引入模块
const modules = {}

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
});

export default new Vuex.Store({
    state: {
        name: 'li'
    },
    mutations: {
        setToken(state, data) {
            state.token = data;
        },
        changeName(state, data){
            state.name = data.name
        }
    },
    actions: {
        setToken(context) {
            context.commit('changeName')
        },
        changeNameByAsyns(context, data){
            context.commit('changeName', data)
        }
    },
    modules,
});