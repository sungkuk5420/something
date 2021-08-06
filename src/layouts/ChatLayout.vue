<template>
  <q-layout view="hHh lpR fFf">
    <q-header height-hint="98" class="chat-header" >
      <div class="chat-header__left" @click="$router.push('/chats')">
        <img src="statics/icons/btn_back.png" alt="" srcset="">
      </div>
      <div class="chat-header__center">{{currentChat.name}}</div>
      <div class="chat-header__right">
        <img src="statics/icons/btn_siren.png" alt="" srcset="">
      </div>
    </q-header>
    <q-page-container>
      <router-view :currentChat="currentChat" />
    </q-page-container>

    <q-footer reveal class="text-white chat-footer" >
      <div class="chat-footer__left">
        <div v-ripple class="relative-position">
          <img src="statics/icons/btn_file.png" alt="" srcset="" >
        </div>
        <div v-ripple class="relative-position">
          <img src="statics/icons/btn_emo.png" alt="" srcset="" >
        </div>
      </div>
      <div class="chat-footer__right">
        <input type="text">
        <div v-ripple class="relative-position" >
          전송
        </div>
      </div>
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
      chatList: "getChatList",
    }),
  },
  watch: {
    
  },
  data() {
    return {
      currentChat:{
        avatar:"",
        index:"",
        name:"",
        text:"",
        time:""
      }
    };
  },
  updated() {
  },
  mounted() {
    const id = parseInt(this.$route.query.id)
    this.currentChat = this.chatList.filter(i=>i.index == id)[0];
    console.log(this.currentChat)
  },
  methods: {
  },
};
</script>

<style lang="scss" >
.q-header {
  &.chat-header{
    display: flex;
    background-color: #f7d1c5;
    justify-content: center;
    padding: 0 10px;
    height: 50px;
    .chat-header__left{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img{
        width: 60px;
      }
    }
    .chat-header__center{
      color: #494b4b;
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 20px;
      justify-content: center;
      font-weight: bold;
    }
    .chat-header__right{
      justify-content: flex-end;
      flex: 1;
      display: flex;
      align-items: center;
      img{
        width: 60px;
      }
    }
  }
}
.q-page {
}

.q-footer {
  &.chat-footer{
    display: flex;
    background-color: #ffffff;
    justify-content: center;
    .relative-position{
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .chat-footer__left {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      img{
        width: 50px;
      }
    }
    .chat-footer__right{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      input{
        flex: 1;
        background: #f5f7fa;
        border:1px solid #020202;
        border-radius: 4px;
        height: 30px;
      }
      .relative-position{
        color:#191717;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px 5px;
        border-radius: 5px;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
        cursor: default;
      }
    }

  }
}
</style>