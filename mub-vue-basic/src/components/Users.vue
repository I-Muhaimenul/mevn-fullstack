<template>
  <div class="hello">
    <h2>User List</h2>
    <div class="container">
      <div class="table-responsive" v-if="users.length > 0">
        <table class="table">
          <thead class="text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.password }}</td>
              <td>
                <router-link v-bind:to="{ name: 'EditUser', params: { id: user._id } }">Edit</router-link> |
                <a href="#" @click="deleteUser(user._id, user)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        There are no User.. Lets add one now <br /><br />
      </div>
      <div>
        <router-link v-bind:to="{ name: 'UserForm' }" class="add_post_link">Add User</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'Users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const response = await UsersService.findAll()
      this.users = response.data
    },
    async deleteUser (id, user) {
      const response = await UsersService.deleteUser(id)
      const idx = this.users.indexOf(user)
      this.users.splice(idx, 1)
      this.$router.push({ name: 'Users' })
      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
