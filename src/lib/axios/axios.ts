import Axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { API_URL } from '@/config'
import type { BaseResponse, PaginatedResponse } from '@/types'
// import storage from '@app/utils/storage'

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  // const token = storage.getToken()
  // if (token) {
  //   config.headers.authorization = `bearer ${token}`
  // }
  config.headers.Accept = 'application/json'
  return config
}

const axios = Axios.create({
  baseURL: API_URL
})

axios.interceptors.request.use(authRequestInterceptor) // se utiliza el interceptor creado en cada request
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export type ApiResponse<T> = Promise<AxiosResponse<T>>

const getAll = <T>(endpoint: string, params?: object): ApiResponse<T> => {
  return axios.get<T>(endpoint, { params })
}

const get = <T>(endpoint: string): Promise<T> => {
  return axios.get(endpoint)
}

// Generic GET BY ID function
const getById = <T>(endpoint: string, id: string | number): ApiResponse<T> => {
  return axios.get<T>(`${endpoint}/${id}`)
}

// Generic CREATE function
const create = <T>(endpoint: string, data: T): ApiResponse<T> => {
  return axios.post<T>(`${endpoint}`, data)
}

// Generic UPDATE function
const update = <T>(endpoint: string, id: string | number, data: T): ApiResponse<T> => {
  return axios.put<T>(`${endpoint}/${id}`, data)
}

// Generic DELETE function
const deleteById = <T>(endpoint: string, id: string | number): ApiResponse<T> => {
  return axios.delete<T>(`${endpoint}/${id}`)
}

export const apiService = { getAll, get, getById, create, update, deleteById }
