<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>User List</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
    </ul>
    <div class="container">
      <div class="well form">
        <h4>Add User</h4>
        <!--<form class="form-horizontal" action="#">-->
         <div class="form-group">
          <label class="control-label col-sm-2" for="name">Name:</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" v-model="User.name">
          </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" v-model="User.email">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="pwd" name="password" placeholder="Enter password" v-model="User.password">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button class="btn btn-large btn-block btn-primary full-width" @click="updateUser">Submit</button>
            </div>
          </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  name: 'EditUser',
  data () {
    return {
      msg: 'Welcome to Your USER-MEVN-EDIT App',
      User: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async getUser () {
      const response = await UsersService.getUser({
        id: this.$route.params.id
      })
      console.log(response)
      this.User.name = response.data.name
      this.User.email = response.data.email
      this.User.password = response.data.password
    },
    async updateUser () {
      const response = await UsersService.updateUser({
        id: this.$route.params.id,
        name: this.User.name,
        email: this.User.email,
        password: this.User.password
      })
      console.log(response)
      this.$router.push({ name: 'Users' })
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
</style>
