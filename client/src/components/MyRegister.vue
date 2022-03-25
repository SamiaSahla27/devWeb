<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input
      type="passWord"
      name="passWord"
      placeholder="passWord"
      v-model="passWord"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthentificationService from "@/services/AuthentificationService";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      AuthentificationService.register({
        email: this.email,
        password: this.passWord,
      });
      console.log("new register", this.email, this.passWord);
      //console.log("response", response.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
