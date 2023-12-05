import axios from 'axios'

const API_URL: String = 'http://localhost:8000/'

interface Result {
  username: string;
  result: number;
}

class Backend {

  save(username: string, password: string, token: string) {
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    localStorage.setItem('token', token)
  }

  clear() {
    localStorage.clear()
  }

  authorizationHeaders() {
    return { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }
  }

  async login(username: string, password: string): Promise<boolean> {
    return axios.post(API_URL + 'token', {
      username: username,
      password: password
    }, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
      .then(response => {
        this.save(username, password, response.data.access_token)
        return true
      })
      .catch(_ => {
        this.clear()
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

  async getMyResult(): Promise<Result> {
    return axios.get(API_URL + 'results/me', this.authorizationHeaders())
      .then(result => result.data)
      .catch(_ => undefined)
  }

  async saveResult(result: number): Promise<boolean> {
    return axios.post(API_URL + 'result', {
      'result': result
    }, this.authorizationHeaders())
      .then(_ => true)
      .catch(_ => false)
  }
}

export default new Backend()