<template>
  <q-page class="login-page">
    <div class="main">
      <input
        type="text"
        class="inputbox"
        placeholder="이메일"
        v-model="email"
        v-on:keyup.enter="login"
      />
      <input
        type="password"
        class="inputbox"
        placeholder="비밀번호"
        v-model="password"
        v-on:keyup.enter="login"
      />
      <label class="checkbox-row">
        <input type="checkbox" class="checkbox" value="autologin" /> 자동로그인
      </label>
      <div class="btn1" @click="login">로그인</div>
      <router-link to="join" class="btn1">회원가입</router-link>
      <router-link to="reset-password" class="btn1">비밀번호 찾기</router-link>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import firebase from "firebase";
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
export default {
  name: "PageIndex",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    // const emailStringIntoPath = this.$route.fullPath.split("email=")[1];
    // if (emailStringIntoPath) {
    //   this.email = emailStringIntoPath.replace("%40", "@");
    // }
    if (this.loginUser) {
      this.$router.push(`/mainTutorial`);
    }
  },
  computed: {},
  methods: {
    login() {
      const email = this.email;
      const password = this.password;
      const thisObj = this;

      localStorage.removeItem("friendList");
      thisObj.$store.dispatch(T.SET_LOGIN_USER, {
        data: {
          userId: "tester",
        },
      })
      thisObj.$router.push(`/mainTutorial`);
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then((res) => {
      //     console.log(res);
      //     if (res.operationType == "signIn") {
      //       thisObj.$store
      //         .dispatch(T.SET_LOGIN_USER, {
      //           data: {
      //             userId: res.user.uid,
      //           },
      //         })
      //         .then(() => {
      //           thisObj.$router.push(`/main`);
      //         });
      //     }
      //   })
      //   .catch(function (error) {
      //     Notify.create({
      //       color: "white",
      //       textColor: "black",
      //       message: error.message,
      //       position: "top",
      //       timeout: 3000,
      //     });
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     // ...
      //   });
    },
  },
};
</script>

<style lang="scss">
.q-page.login-page {
  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 30px;
  }
}
</style>
