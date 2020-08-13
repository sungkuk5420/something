<template>
  <q-page class="join-page">
    <div class="main">
      <input type="text" class="inputbox" placeholder="이름" />
      <input type="text" class="inputbox" placeholder="이메일" v-model="email" />
      <input type="password" class="inputbox" placeholder="비밀번호" v-model="password" />
      <input type="password" class="inputbox" placeholder="비밀번호 확인" />
      <div class="btn1" @click="join">회원가입</div>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import firebase from "firebase";
export default {
  name: "PageIndex",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {},
  methods: {
    join() {
      console.log("join!");
      const email = this.email;
      const password = this.password;

      const thisObj = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user) {
            thisObj.$router.push(`/?email=${email}`);
          }
        })
        .catch(function (error) {
          console.log(error);
          Notify.create({
            color: "white",
            textColor: "black",
            message: error.message,
            position: "top",
            timeout: 3000,
          });
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
  },
};
</script>

<style lang="scss">
.q-page.join-page {
  .main {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
