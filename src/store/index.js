import {createStore} from "vuex";

const store = createStore({
    state:{
        user:{
            token: ''
        }
    },
    getters:{

    },
    actions:{
        login({ commit }, user){
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data
                })
        },
    },
    mutations:{
        setUser: (state, token) => {
            state.user.token = token;
        }
    }
})

export default store;