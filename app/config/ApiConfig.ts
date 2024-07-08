

import { logoutAction } from "../../../../../Desktop/METSL/app/screens/authentication/store/async-actions/logoutAction"
import { instance, post } from "./AxiosConfig"

export function addTokenToAxiosInstance(
  store: any,
) {
  
const RefreshTokenHelper = async ()=> {
  try {
    const auth =  store.getState().auth
    const response:void = await post('api/auth-module/refresh-token', null, {
      headers: {
        Authorization: `Bearer ${auth?.refresh_token}`
      }
    }
    )
  } catch (error) {

  }
}

instance.interceptors.request.use(
  async (config) => {

    const auth =  store.getState().auth?.loginData
   
    try {
      config.headers.Authorization = `Bearer ${auth.sessionJwt}`
    } catch (error) {

    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
)


instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("axios error", JSON.stringify(error))
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        RefreshTokenHelper();
        store.dispatch(logoutAction())
      }
    }
    return Promise.reject(error);
  }
);
}