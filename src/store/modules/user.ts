import { loginApi, getInfoApi, loginOutApi } from '@/api/user'
import { ActionContext } from 'vuex'

export interface userState {
  token: string,
  info: object
}
const state = (): userState => ({
  token: '', // 登录token
  info: {},  // 用户信息
})

// getters
const getters = {
  token(state: userState) {
    return state.token
  }
}

// mutations
const mutations = {
  tokenChange(state: userState, token: string) {
    state.token = token
  },
  infoChange(state: userState, info: object) {
    state.info = info
  }
}

// actions
const actions = {
  // login by login.vue
  login({ commit, dispatch }: ActionContext<userState, userState>, params: any) {
    return new Promise((resolve, reject) => {
      loginApi(params)
        .then(res => {
          window.localStorage.Token = res.Data.Token; // 角色token
          window.localStorage.urse = res.Data.RoleId; // 角色ID
          window.localStorage.isAdmin = res.Data.IsAdmin == true ? 1 : 0;//是否为运营平台
          commit('tokenChange', res.Data.Token)
          dispatch('getInfo', { Token: res.Data.Token, TokenType: 0 })
            .then(infoRes => {
              resolve(res.Data.Token)
            })
        }).catch(err => {
          reject(err)
        })
    })
  },
  // get user info after user logined
  getInfo({ commit }: ActionContext<userState, userState>, params: any) {
    return new Promise((resolve, reject) => {
      getInfoApi(params)
        .then(res => {
          commit('infoChange', {
            Address: res.Data.Address,
            CompanyName: res.Data.CompanyName,
            EvaluationNumber: res.Data.EvaluationNumber,
            Phone: res.Data.Phone,
            Photo: res.Data.Photo,
            UserName: res.Data.UserName,
          })
          resolve({
            Address: res.Data.Address,
            CompanyName: res.Data.CompanyName,
            EvaluationNumber: res.Data.EvaluationNumber,
            Phone: res.Data.Phone,
            Photo: res.Data.Photo,
            UserName: res.Data.UserName,
          })
        })
    })
  },
  // login out the system after user click the loginOut button
  loginOut({ commit }: ActionContext<userState, userState>) {
    loginOutApi()
      .then(res => {

      })
      .catch(error => {

      })
      .finally(() => {
        localStorage.removeItem('tabs')
        localStorage.removeItem('vuex')
        sessionStorage.removeItem('vuex')
        location.reload()
      })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
