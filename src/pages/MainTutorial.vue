<template>
  <q-page class="main-tutorial-page">
    <div class="main" v-if="localList.length != 0">
      <Card v-for="(users,index) in localList" :users="users" :key="index" />
    </div>
  </q-page>
</template>

<script>
import Card from "../components/Card";
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  data(){
    return {
      localList: [
        [{
          name: "여자 1",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-1.jpg"
        },
        {
          name: "여자 2",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-2.jpg"
        }],
        [{
          name: "여자 3",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-3.jpg"
        },
        {
          name: "여자 4",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-4.jpg"
        }],
        [{
          name: "여자 5",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-5.jpg"
        },
        {
          name: "여자 6",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-6.jpg"
        }],
      ]
    }
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      mainTutorialUserList: "getMainTutorialUserList",
    }),
  },
  watch:{
    mainTutorialUserList(value){
      console.log("changed mainTutorialUserList")
      console.log(value)
      this.localList = [];
      this.localList = value;
    }
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
.q-page.main-tutorial-page {
  overflow: auto;
  .main {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
