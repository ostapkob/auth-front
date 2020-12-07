import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = 'http://127.0.0.1:8080/api/test/'
const API_URL = 'http://192.168.99.107:8080/api/test/'

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all')
  }
  getUserBoard() {
    return axios.get(API_URL + 'user', {headers: authHeader()})
  }
  getManagerBoard() {
    console.log('authHeader: ',  authHeader());
    return axios.get(API_URL + 'manager', {headers: authHeader()})
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', {headers: authHeader()})
  }
}
export default new UserService();

