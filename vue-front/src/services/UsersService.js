import Api from '@/services/Api'

export default {
  findAll () {
    return Api().get('users')
  },
  addUser (params) {
    return Api().post('users', params)
  },
  getUser (params) {
    return Api().get('users/' + params.id)
  },
  updateUser (params) {
    return Api().put('users/' + params.id, params)
  },
  deleteUser (id) {
    return Api().delete('users/' + id)
  }
}
