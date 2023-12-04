import axios from 'axios'

const API_URL: String = 'http://localhost:8000/'

interface Result {
  username: string;
  result: number;
}

class Backend {
  username: string
  password: string
  token: string

  clear() {
    this.username = ''
    this.password = ''
    this.token = ''
  }

  async login(username: string, password: string): Promise<boolean> {
    return axios.post(API_URL + 'token', {
      username: username,
      password: password
    }, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
      .then(response => {
        this.username = username
        this.password = password
        this.token = response.data.access_token
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

  async saveResult(result: number): Promise<boolean> {
    return axios.post(API_URL + 'result', {
      'result': result
    }, {
      headers: { 'Authorization': 'Bearer ' + this.token }
    })
      .then(_ => true)
      .catch(_ => false)
  }
}

export default new Backend()