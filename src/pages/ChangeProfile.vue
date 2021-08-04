<template>
  <q-page class="join-page">
    <div class="main">
      <input type="text" class="inputbox" placeholder="이름" v-model="name" v-on:keyup.enter="join" />
      <input type="text" class="inputbox" placeholder="이메일" v-model="email" v-on:keyup.enter="join" />
      <input
        type="password"
        class="inputbox"
        placeholder="비밀번호"
        v-model="password"
        v-on:keyup.enter="join"
      />
      <input
        type="password"
        class="inputbox"
        placeholder="비밀번호 확인"
        v-model="password2"
        v-on:keyup.enter="join"
      />
      <div class="btn1" @click="join">회원가입</div>
    </div>
  </q-page>
</template>

<script>
import { Notify } from "quasar";
import firebase from "firebase";
import { T } from "../store/module-example/types";
export default {
  name: "PageIndex",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
    };
  },
  mounted() {},
  methods: {
    message(text) {
      Notify.create({
        color: "white",
        textColor: "black",
        message: text,
        position: "top",
        timeout: 3000,
      });
    },
    join() {
      console.log("join!");
      const thisObj = this;


      thisObj.message("회원가입 완료");
      thisObj.$router.push(`/?email=${email}`);
      return false;
      
      const email = this.email;
      const password = this.password;
      const password2 = this.password2;
      const name = this.name;
      if (email == "") {
        thisObj.message("이메일을 입력해주세요.");
        return false;
      } else if (name == "") {
        thisObj.message("이름을 입력해주세요.");
        return false;
      } else if (password == "") {
        thisObj.message("패스워드를 입력해주세요.");
        return false;
      } else if (password !== password2) {
        thisObj.message("패스워드 1,2가 다릅니다.");
        return false;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.user) {
            let user = {
              name,
              email: res.user.email,
              profileImage: res.user.photoURL || "",
              comment: "",
              age: "",
              height: "",
              chats: "",
              voteHistories: "",
              uid: res.user.uid,
            };
            console.log(user);

            this.$store
              .dispatch(T.ADD_USER_DATA, {
                data: {
                  user,
                },
              })
              .then(() => {
                thisObj.message("회원가입 완료");
                thisObj.$router.push(`/?email=${email}`);
              });
          }
        })
        .catch(function (error) {
          console.log(error);
          thisObj.message(error.message);
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top:20px;
  }
}
</style>
