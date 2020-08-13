<template>
  <q-page class="main-page">
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
  mounted() {
    const thisObj = this;
    const successCb = (result) => {};
    const errorCb = () => {};
    thisObj.loading = true;
    thisObj.$store.dispatch(T.SEX_MODAL_VISIABLE, {
      data: {
        modalVisiable: true,
        sex: "",
      },
      successCb,
      errorCb,
    });
  },
};
</script>

<style lang="scss">
.q-page.main-page {
  .main {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
