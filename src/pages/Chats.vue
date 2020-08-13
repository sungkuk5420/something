<template>
  <q-page class="chats-page">
    <div class="main">
      <Chat v-for="(user,index) in mainTutorialUserList" :user="user" :key="index" />
    </div>
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
      mainTutorialUserList: "getMainTutorialUserList",
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
