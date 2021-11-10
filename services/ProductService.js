import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://127.0.0.1:8000/api/',
  baseURL: 'https://crypto-joe-django-backend.herokuapp.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts () {
    return apiClient.get('/product/list/')
  },
  getProduct (id) {
    return apiClient.get('/product/detail/' + id)
  }
}
