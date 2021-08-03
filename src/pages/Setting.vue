<template>
  <q-page class="setting-page">
    <div class="main">
      <router-link to="profile">
        <div class="row menu">
          <img src="statics/image/man-5.jpg" class="icon avatar" alt srcset />
          <span>내 정보</span>
        </div>
      </router-link>
      <div class="row menu">
        <img src="statics/icons/btn_pwchange.png" class="icon" alt srcset />
        <span>프로필 변경</span>
      </div>
      <div class="row menu" @click="logout">
        <img src="statics/icons/btn_logout.png" class="icon" alt srcset />
        <span>로그아웃</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import firebase from "firebase";
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
import mixin from "./mixin";
export default {
  mixins: [mixin],
  name: "Setting",
  components: {},
  mounted() {},
  methods: {
    logout() {
      const thisObj = this;
      this.$store.dispatch(T.SET_LOGIN_USER, {
        data: null,
      });
      this.removeLoginSesstion();
      thisObj.$router.push(`/`);
      // firebase
      //   .auth()
      //   .signOut()
      //   .then(
      //     (res) => {
      //       console.log(res);

      //       this.$store.dispatch(T.SET_LOGIN_USER, {
      //         data: {
      //           loginUser: null,
      //         },
      //       });
      //       this.removeLoginSesstion();
      //       thisObj.$router.push(`/`);
      //     },
      //     (error) => {
      //       console.log(error);
      //     }
      //   );
    },
  },
};
</script>

<style lang="scss">
.q-page.setting-page {
  .main {
    padding-top: 20px;
    .menu {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-color: #f7f8f8;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      &:nth-child(even) {
        background-color: #f7d1c5;
      }
      &:hover {
        cursor: pointer;
      }
      .avatar{
        border-radius: 50%;
      }
      img {
        width: 60px;
        height: 60px;
      }
      span {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: #294a73;
        font-weight: bold;
      }
    }
  }
}
</style>
