import axios , { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import store from '@/store'
import qs from 'qs'
import { ElMessage,ElLoading } from 'element-plus'
import { QuestionFilled } from '@element-plus/icons'
const baseURL: any = import.meta.env.VITE_BASE_URL
const user = {
  Token: window.localStorage.Token,
}
const service: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: 'Bearer ' + window.localStorage.Token,
}
})
let loading:any;
//正在请求的数量
let requestCount:number = 0
const showLoading = () => {
  if (requestCount === 0 && !loading) {
      loading = ElLoading.service({
          text: "拼命加载中，请稍后...",
          background: 'rgba(0, 0, 0, 0.7)',
          spinner: 'el-icon-loading',
      })
  }
  requestCount++;
}
//隐藏loading
const hideLoading = () => {
  requestCount--
  if (requestCount == 0) {
      loading.close()
  }
}
// 请求前的统一处理
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // JWT鉴权处理
    // showLoading()
    config.headers['Token'] = localStorage.getItem('Token') || '';
  //某些接口去除token(params里面noToken值为true的时候,传递给后端的token值为空)
  if (config.params && config.params.noToken) {
    config.headers['token'] = '';
  }else{

  }
    return config
  },
  (error: AxiosError) => {
    console.log(error) // for debug
    
    return Promise.reject(error)
  }
)
service.defaults.transformRequest = (data) => {
  const reqData =  qs.stringify({...user,...data})
  return reqData
}

service.interceptors.response.use(
  (response: AxiosResponse) => {
    hideLoading()
    const res = response.data
    const msg = errorCodeType(res)|| res['msg'] || errorCodeType('default',res.Msg)
    if (res.Code === 200) {
      return Promise.resolve(res)
    } else {
      ElMessage.error(msg)
      return Promise.reject(res)
    }
  },
  (error: AxiosError)=> {
    console.log('err'+error) // for debug
    //if(message ==''){
      // todo
    // }
    let {message} = error;
    ElMessage.error({
      message: message,
      duration: 5 * 1000
  }) 
    return Promise.reject(error),user
  }
)





// const axiosPost = function(url = '', data = {}) {
//   let {
//       user,
//       sucFun,
//       errFun
//   } = XHR()
//       // if (data.a && !window.localStorage.Token) {
//   if (data.a) {
//       user.Token = data.a
//       window.localStorage.Token = data.a
//   }
 
//   let reqData = qs.stringify({
//       ...user,
//       ...data
//   })
//   console.log(user,data,reqData)
//   return axiosX.post(url, reqData).then(sucFun).catch(errFun)
// }

// // GET
// const axiosGet = function(url = '', data = {}) {
//   let {
//       user,
//       sucFun,
//       errFun
//   } = XHR()
//   let params = qs.stringify({
//       params: {
//           ...user,
//           ...data
//       }
//   })
//   console.log(user,data,params)
//   return axiosX.get(url, params).then(sucFun).catch(errFun)
// }

// const axiosRefund = function(url = '', data = {}) {
//   let {
//       user,
//       sucFun,
//       errFun
//   } = XHR()
//   let reqData = qs.stringify({
//       ...user,
//       ...data
//   })
//   return reFundPost.post(url, reqData).then(sucFun).catch(errFun)
// }

// // POST X
// const axiosPostX = function(url = '', data = {}) {
//   let {
//       sucFun,
//       errFun
//   } = XHR()
//   return axiosX.post(url, data, {
//       headers: {
//           Authorization: 'Bearer ' + window.localStorage.Token,
//       }
//   }).then(sucFun).catch(errFun)
// }
    
export const errorCodeType = function(code:string,Msg:string):string{
  let msg:string = ""
  switch (code) {
      case "401":
          msg = '认证失败，无法访问系统资源'
          break;
      case "403":
          msg = '当前操作没有权限'
          break;
      case "404":
          msg = '访问资源不存在'
          break;
      case "default":
          msg = Msg
          break;
      default:
          return Msg
  }
  return msg
}
// 错误处理
function showError(error: any) {
  // token过期，清除本地数据，并跳转至登录页面
  if (error.code === 403) {
    // to re-login
    store.dispatch('user/loginOut')
  } else {
    ElMessage({
      message: error.msg || error.message || '服务异常',
      type: 'error',
      duration: 3 * 1000
    })
  }
  
}

export default service