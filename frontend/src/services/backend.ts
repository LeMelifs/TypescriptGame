import axios from 'axios'

const API_URL: String = 'http://localhost:8000/'

interface Result {
  username: string;
  result: number;
}

class Backend {
  async login(username: string, password: string): Promise<boolean> {
    return axios.post(API_URL + 'token', {
      username: username,
      password: password
    }, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
      .then(response => {
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        localStorage.setItem('token', response.data.token)
        return true
      })
      .finally(() => {
        localStorage.clear()
        return false
      })
  }

  async results(): Promise<[Result]> {
    return axios.get(API_URL + 'results')
      .then(response => {
        return response.data
      })
      .catch(_ => {
        return []
      })
  }
}

export default new Backend()