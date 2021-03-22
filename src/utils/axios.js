import axios from "axios";
import { Loading } from "element-ui";
import { confirm } from "@/base/confirm";
import store from "@/store";

<<<<<<< HEAD
const BASE_URL = "https://api.mtnhao.com/";
// const BASE_URL = "http://127.0.0.1:8080/";
=======
const BASE_URL = "http://wangyiyun.nihaoa.icu:8080/";
>>>>>>> 78e033cdff57ee377dd0623faf2b3ad6c46a1e5b
//不带全局loading的请求实例
export const requestWithoutLoading = createBaseInstance();
//带全局loading的请求实例
//传入函数是因为需要在处理请求结果handleResponse之前处理loading
//所以要在内部插入loading拦截器的处理逻辑
export const request = createBaseInstance();
mixinLoading(request.interceptors)
//通用的axios的实例
function createBaseInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.response.use(handleResponse, handleError);
  return instance;
}

function handleError(e) {
  confirm(e.message, "出错啦！");
  throw e;
}
//返回响应的结果data
function handleResponse(response) {
  return response.data;
}

let loading;
let loadingCount = 0
const SET_AXIOS_LOADING = 'global/setAxiosLoading'
function mixinLoading(interceptors) {
    interceptors.request.use(loadingRequestInterceptor)
    interceptors.response.use(
        loadingResponseInterceptor,
        loadingResponseErrorInterceptor
    )

    function loadingRequestInterceptor(config) {
        if (!loading) {
            loading = Loading.service({
                target: 'body',
                background: 'transparent',
                text: '载入中'
            })
            store.commit(SET_AXIOS_LOADING, true)
        }
        loadingCount++

        return config
    }

    function loadingResponseInterceptor(response) {
        handleResponseLoading()
        return response
    }
    
    function loadingResponseErrorInterceptor(e) {
        handleResponseLoading()
        throw e
    }

    function handleResponseLoading() {
        loadingCount--
        if (loadingCount === 0) {
            loading.close()
            loading = null
            store.commit(SET_AXIOS_LOADING, false)
        }
    }
}
