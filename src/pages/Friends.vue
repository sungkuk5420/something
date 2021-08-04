<template>
  <q-page class="friends-page">
    <div :class="friendList.length==0?'main with-guide':'main'">
      <Friend v-for="(user,index) in friendList" :user="user" :key="index" />
      <div class="guide" v-if="friendList.length==0">
        아직 매칭이력이 없습니다. <br>
        밀당을 통해 상대방을 선택해보세요.
      </div>
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
  },
  data(){
    return{
      friendList:[]
    }
  },
  mounted() {
    
    let friendList = localStorage.getItem("friendList");
    if(friendList){
      this.friendList = JSON.parse(friendList)
    }
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
  overflow: auto;
  .main {
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &.with-guide{
      justify-content: center;
    }
    .guide{
      width: 100%;
      height:100%;
      padding-bottom: 50px;
      display: flex;
      flex:0;
      align-items: center;
      justify-content: center;
      text-align: center;
      color:#3f3f3f;
      font-weight: bold;
      font-size: 15px;
    }
  }
}
</style>
