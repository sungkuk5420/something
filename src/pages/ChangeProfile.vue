<template>
  <q-page class="change-profile-page">
    <div class="main">
      <q-file>
        <img src="statics/image/man-5.jpg" alt="" srcset="">
      </q-file>
      <input type="text" class="inputbox" placeholder="이름" v-model="name" v-on:keyup.enter="join" />
      <input type="text" class="inputbox" placeholder="나이" v-model="name" v-on:keyup.enter="join" />
      <input type="text" class="inputbox" placeholder="한줄소개" v-model="name" v-on:keyup.enter="join" />
      <div class="btn1" @click="changeProfile">변경하기</div>
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
    changeProfile() {
      const thisObj = this;
      thisObj.message("변경 완료");
      thisObj.$router.push(`/setting`);
    },
  },
};
</script>

<style lang="scss">
.q-page.change-profile-page {
  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top:20px;
    .q-file{
      .q-field__control-container{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .q-field__native{
        width:0;
      }
      img{
        width:80px;
        height: 80px;
        border-radius: 50%;
        margin-top: 20px;
        margin-bottom: 40px;
      }
    }
  }
  .q-field--standard .q-field__control:before,
  .q-field--standard .q-field__control:after{
    display: none;
  }
}
</style>
