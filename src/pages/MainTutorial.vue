<template>
  <q-page class="main-tutorial-page">
    <div class="main">
      <Card v-for="(user,index) in mainTutorialUserList" :user="user" :key="index" />
    </div>
  </q-page>
</template>

<script>
import Card from "../components/Card";
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Card,
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
.q-page.main-tutorial-page {
  .main {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
