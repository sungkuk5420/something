<template>
  <q-layout view="hHh lpR fFf">
    <q-header height-hint="98" :class="tutorialVisiable?'tutorial-showed':''">
      <img src="statics/icons/logo_something_main.png" alt />
    </q-header>
    <Modal v-show="sexModalVisiable" />
    <img
      src="statics/icons/tutorial.png"
      alt
      :class="tutorialVisiable?'tutorial is-show':'tutorial'"
      @click="hideTutorial"
    />
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="text-white" v-if="!loginUser">
      <q-tabs align="left">
        <q-route-tab to="/mainTutorial">
          <img
            src="statics/icons/btn_inu_off.png"
            class="off"
            v-show="activeTabNumber!=1"
            @click="activeTabNumber=1"
          />
          <img src="statics/icons/btn_inu_on.png" class="on" v-show="activeTabNumber==1" />
        </q-route-tab>
        <q-route-tab to="#">
          <img src="statics/icons/btn_help_off.png" class="off active" alt @click="showTutorial" />
        </q-route-tab>
        <q-route-tab to="/">
          <img
            src="statics/icons/btn_log_off.png"
            class="off"
            v-show="activeTabNumber!=3"
            @click="activeTabNumber=3"
          />
          <img src="statics/icons/btn_log_on.png" class="on" v-show="activeTabNumber==3" />
        </q-route-tab>
      </q-tabs>
    </q-footer>
    <q-footer reveal class="text-white" v-if="loginUser">
      <q-tabs align="left">
        <q-route-tab to="/mainTutorial">
          <img
            src="statics/icons/btn_inu_off.png"
            class="off"
            v-show="activeTabNumber!=1"
            @click="activeTabNumber=1"
          />
          <img src="statics/icons/btn_inu_on.png" class="on" v-show="activeTabNumber==1" />
        </q-route-tab>
        <q-route-tab to="/chats">
          <img
            src="statics/icons/btn_chat_off.png"
            class="off"
            v-show="activeTabNumber!=5"
            @click="activeTabNumber=5"
          />
          <img src="statics/icons/btn_chat_on.png" class="on" v-show="activeTabNumber==5" />
        </q-route-tab>
        <q-route-tab to="/friends">
          <img
            src="statics/icons/btn_cont_off.png"
            class="off"
            v-show="activeTabNumber!=6"
            @click="activeTabNumber=6"
          />
          <img src="statics/icons/btn_cont_on.png" class="on" v-show="activeTabNumber==6" />
        </q-route-tab>
        <q-route-tab to="/setting">
          <img
            src="statics/icons/btn_set_off.png"
            class="off"
            v-show="activeTabNumber!=7"
            @click="activeTabNumber=7"
          />
          <img src="statics/icons/btn_set_on.png" class="on" v-show="activeTabNumber==7" />
        </q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import firebase from "firebase";
import Modal from "../components/Modal";
import { mapGetters } from "vuex";
import { T } from "../store/module-example/types";
import mixin from "../pages/mixin";

export default {
  mixins: [mixin],
  components: {
    Modal,
  },
  computed: {
    ...mapGetters({
      sexModalVisiable: "getSexModalVisiable",
      loginUser: "getLoginUser",
    }),
  },
  watch: {
    loginUser(data) {
      console.log(data)
    },
  },
  data() {
    return {
      activeTabNumber: 3,
      tutorialVisiable: false,
    };
  },
  updated() {
    const pathName = this.$route.fullPath;
    switch (pathName) {
      case "/mainTutorial":
        this.activeTabNumber = 1;
        break;
      case "/":
        this.activeTabNumber = 3;
        break;
      case "/main":
        this.activeTabNumber = 4;
        break;
      case "/chats":
        this.activeTabNumber = 5;
        break;
      case "/friends":
        this.activeTabNumber = 6;
        break;
      case "/setting":
        this.activeTabNumber = 7;
        break;
      case "/profile":
        this.activeTabNumber = 7;
        break;
    }
  },
  mounted() {
    const thisObj = this;
    firebase.auth().onAuthStateChanged(function (user) {
      console.log("onAuthStateChanged");
      if (user) {
        console.log(user.uid);
        console.log(thisObj.loginUser);

        // // User is signed in.
        if (!thisObj.loginUser) {
          thisObj.$store
            .dispatch(T.SET_LOGIN_USER, {
              data: {
                userId: user.uid,
              },
            })
            .then(() => {});
        }
        const pathName = thisObj.$route.fullPath;
        if (pathName == "/") {
          thisObj.$router.push(`/main`);
        }
      } else {
        // User is signed out.
        thisObj.$router.push("/");
      }
    });
  },
  methods: {
    showTutorial() {
      this.tutorialVisiable = true;
    },
    hideTutorial() {
      this.tutorialVisiable = false;
      this.activeTabNumber = 1;

      this.$store.dispatch(T.SEX_MODAL_VISIABLE, {
        data: {
          modalVisiable: false,
          sex: "man",
        },
      });
      this.$router.push("/mainTutorial");
    },
  },
};
</script>

<style lang="scss" >
.q-header {
  display: flex;
  background-color: #f7d1c5;
  justify-content: center;
  flex: 0;
  height: 58px;
  img {
    width: 150px;
    margin-top: 8px;
  }
  &.tutorial-showed{
    background: #c1aaaa;
    img{
      opacity: 0.7;
    }
  }
}
.tutorial {
  width: 100%;
  height: calc(100% - 58px);
  z-index: 10000;
  position: absolute;
  bottom: 0;
  opacity:0; 
  z-index: 0;
  &.is-show{
    opacity:1; 
    z-index: 10000;
  }
}
.q-page {
  background-color: #eff0f0;

  & > .main {
    flex: 1;
    background-color: #eff0f0;
    padding: 0 20px;

    .inputbox {
      background-color: #ffffff;
      border: 0.5px solid #817e7f;
      height: 50px;
      padding: 0 10px;
    }
    .inputbox + .inputbox {
      margin-top: 10px;
    }
    .inputbox::placeholder {
      color: #000000;
    }
    .checkbox-row {
      display: flex;
      align-items: center;
      margin-top: 15px;
    }
    .checkbox {
      border-radius: 50%;
      color: #000000;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .btn1 {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333333;
      text-decoration: none;
      margin-top: 10px;
      background-color: #f7d1c5;
      border: 0.5px solid #817e7f;
      font-size: 15px;
      height: 40px;
    }
    .btn2 {
      margin-top: 10px;
      border: 0;
      font-size: 15px;
      height: 40px;
    }
  }
}

.q-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0 ;
  background: white;
}
.q-footer img {
  width: 60px;
  cursor: pointer;
}
</style>