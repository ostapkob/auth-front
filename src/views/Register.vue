<template>
  <div>
    <form name="form" @submit.prevent="handleRegister">
      <div>
        <label for="username">Username</label>
        <input
            v-model="user.username"
            type="text"
            name="username"
          />
      </div>
      <div>
        <label for="invite">Invite</label>
        <input
            v-model="user.invite"
            type="text"
            name="invite"
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
      <button @click=handleRegister :disabled="loading">
        <span>Login</span>
      </button>
    </form>
    <div v-if="message" >{{message}}</div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', ''),
      message: '',
      loading: false,
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
    handleRegister() {
      this.loading = true;
      this.message = ""
      this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message
              this.$store.dispatch('auth/login', this.user).then(
                () => {
                  this.$router.push('/profile');
                },
              )
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
    }
  }
</script>
