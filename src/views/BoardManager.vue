<template>
    <div>
      <h3>{{content}}</h3>
    </div>
</template>

<script>
import UserService from '../services/user.service';
export default {
  name: 'Manager',
  data() {
    return {
      content: '0000000000000000'
    };
  },
  mounted() {
    UserService.getManagerBoard().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      }
    );
  }
};
</script>
