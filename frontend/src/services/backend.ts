import axios from 'axios'

const API_URL: String = 'http://localhost:8000/'

class Backend {
  login(username: String, password: String) {
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
      .finally(response => {
        localStorage.clear()
        return false
      })
  }
}

export default new Backend()