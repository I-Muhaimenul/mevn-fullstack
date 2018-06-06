<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>User List</h2>
    <div>
        <router-link v-bind:to="{ name: 'Users' }" class="btn btn-large btn-success">See all users</router-link>
    </div>
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
              <button class="btn btn-large btn-block btn-primary full-width" @click="addToServer">Submit</button>
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
  name: 'UserForm',
  data () {
    return {
      msg: 'Welcome to Your USER-MEVN App',
      User: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async addToServer () {
      // console.log(this.User.password)
      const response = await UsersService.addUser({
        // v-model is equal to name of intput
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
