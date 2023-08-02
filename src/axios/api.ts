import axios, { Axios, AxiosRequestConfig } from 'axios';
import Todo from '../interfaces/Todo';

const instance: Axios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

// interface APIResponse<T> {
//   statusCode: number // 상태코드 (보인 서버상태코드)
//   errorCode: number // 에러코드 (본인 서버에러코드)
//   message: string // 메시지
//   result: T // 데이터 내용
//   timestamp: Date // 시간
// }

// export const getTodos = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
//   try {
//     const res = await instance.get<APIResponse<T>>(url, config);
//     return res.data
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }

// export const addTodo = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
//   try {
//     const res = await instance.post<APIResponse<T>>(url, data, config);
//     return res.data
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }

// export const switchTodo = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
//   try {
//     const response = await instance.put<APIResponse<T>>(url, data, config);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const deleteTodo = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
//   try {
//     const res = await instance.delete<APIResponse<T>>(url, config);
//     return res.data
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }

export default instance;
