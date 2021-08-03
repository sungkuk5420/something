<template>
  <q-page class="chats-page">
      <Chat v-for="(chat,index) in chatList" :chat="chat" :key="index" />
  </q-page>
</template>

<script>
import Chat from "../components/Chat";
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Chat,
  },
  computed: {
    ...mapGetters({
      chatList: "getChatList",
    }),
  },
  mounted() {},
};
</script>

<style lang="scss">
.q-page.chats-page {
  .main {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
