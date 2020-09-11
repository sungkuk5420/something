<template>
  <q-page class="main-page">
    <div class="main">
      <Card v-for="(users,index) in mainTutorialUserList" :users="users" :key="index" />
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
    thisObj.loading = true;
    thisObj.$store.dispatch(T.SEX_MODAL_VISIABLE, {
      data: {
        modalVisiable: true,
        sex: "",
      },
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
