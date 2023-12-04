import axios from 'axios'

const API_URL: String = 'http://localhost:8000/'

class Backend {
  async login(username: String, password: String): Promise<Boolean> {
    return axios.post(API_URL + 'token', {
      username: username,
      password: password
    }, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
      .then(response => {
        localStorage.setItem('username', username.toString())
        localStorage.setItem('password', password.toString())
        localStorage.setItem('token', response.data.token)
        return true
      })
      .finally(() => {
        localStorage.clear()
        return false
      })
  }
}

export default new Backend()