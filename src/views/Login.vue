<template>
  <div>
    {{loggedIn}}
    ..............
    <form name="form" @submit.prevent="handleLogin">
      <div>
        <label for="username">Username</label>
        <input
            v-model="user.username"
            type="text"
            name="username"
          />
      </div>
      <div>
        <label for="password">Password</label>
        <input
            v-model="user.password"
            type="password"
            name="password"
          />
      </div>
      <button @click=handleLogin :disabled="loading">
        <span>Login</span>
      </button>
    </form>
    <div v-if="message" >{{message}}</div>
  </div>


</template>

<script>
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      //console.log(this.loggedIn);
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
    }
  }
};
</script>

