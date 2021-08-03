<template>
  <q-page class="friends-page">
    <div class="main">
      <Friend v-for="(user,index) in mainTutorialUserList" :user="user" :key="index" />
    </div>
  </q-page>
</template>

<script>
import Friend from "../components/Friend";
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Friend,
  },
  computed: {
    ...mapGetters({
      mainTutorialUserList: "getMainTutorialUserList",
    }),
  },
  mounted() {
    const thisObj = this;
    thisObj.loading = true;
    thisObj.$store.dispatch(T.SEX_MODAL_VISIABLE, {
      data: {
        modalVisiable: false,
        sex: "man",
      },
    });
  },
};
</script>

<style lang="scss">
.q-page.friends-page {
  .main {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
