<template>
  <q-layout view="hHh lpR fFf">
    <q-header height-hint="98">
      <img src="statics/icons/logo_something_main.png" alt />
    </q-header>
    <Modal v-show="sexModalVisiable" />
    <img
      src="statics/icons/tutorial.png"
      class="tutorial"
      alt
      v-show="tutorialVisiable"
      :style="!tutorialVisiable?'opacity:0; z-index: 0;':''"
      @click="hideTutorial"
    />
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="text-white">
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
  </q-layout>
</template>

<script>
import firebase from "firebase";
import Modal from "../components/Modal";
import { mapGetters } from "vuex";

export default {
  components: {
    Modal,
  },
  computed: {
    ...mapGetters({
      sexModalVisiable: "getSexModalVisiable",
    }),
  },
  data() {
    return {
      activeTabNumber: 3,
      tutorialVisiable: false,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function (user) {
      console.log("onAuthStateChanged");
      console.log(user);
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
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
}
.tutorial {
  width: 100%;
  height: calc(100% - 58px);
  z-index: 10000;
  position: fixed;
  bottom: 0;
}
.q-page {
  background-color: #eff0f0;

  & > .main {
    flex: 1;
    overflow: auto;
    background-color: #eff0f0;
    padding: 0 30px;

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
  padding: 10px 0;
  background: white;
}
.q-footer img {
  width: 60px;
  cursor: pointer;
}
</style>