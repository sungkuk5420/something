<template>
  <q-page class="chat-room-page">
    <q-chat-message
      class="my-message"
      name="홍길동"
      avatar="statics/image/man-5.jpg"
      :text="['안녕하세요~']"
      stamp="7분전"
      size="6"
      sent
      text-color="black"
    />
    <q-chat-message
      class="your-message"
      :name="`${currentChat.name}`"
      :avatar="`${currentChat.avatar}`"
      :text="[
        `안녕하세요`,
        '이거 처음써보는데 생각보다 좋네요 ㅎㅎㅎ '
      ]"
      size="6"
      stamp="4분전"
      text-color="black"
    />
    <q-chat-message
      class="your-message"
      :name="`${currentChat.name}`"
      :avatar="`${currentChat.avatar}`"
      :text="['나이가 어떻게되세요?']"
      stamp="1분전"
      size="8"
      text-color="black"
    />
  </q-page>
</template>

<script>
import Chat from "../components/Chat";
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
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
  components: {
    Chat,
  },
  computed: {
    ...mapGetters({
      chatList: "getChatList",
    }),
  },
  mounted() {
    const id = parseInt(this.$route.query.id)
    this.currentChat = this.chatList.filter(i=>i.index == id)[0];
    console.log(this.currentChat)
  },
};
</script>

<style lang="scss">
.q-page.chat-room-page {
  padding: 20px;
  background: #eff0f0;
  .your-message{
    .q-message-text{
      background: white;
      border: 2px solid #acddd2;
      border-radius: 5px;
    }
    .q-message-text--sent:last-child:before{
      border-bottom-color: #acddd2;
    }
  }
  .my-message{
    .q-message-text{
      background: white;
      border: 2px solid #ea8b96;
      border-radius: 5px;
    }
    .q-message-text--sent:last-child:before{
      border-bottom-color: #ea8b96;
    }
  }
}
</style>
