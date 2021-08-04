<template>
  <div class="chat relative-position" v-ripple>
    <div class="chat-img">
      <img :src="chat?chat.avatar:''" alt />
    </div>
    <div class="chatting-text">
      <div class="chatting-left">
        <div class="chat-name">
          <b>{{chat?chat.name:''}}</b>
        </div>
        <div class="chat-conversation">
          {{chat.text}}
        </div>
      </div>
      <div class="chatting-right">
        <img src="statics/icons/btn_chat_start.jpg" alt  style="width:55px;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["chat"],
};
</script>

<style lang="scss">
.chat {
  display: flex;
  padding: 5px 10px;
  border-bottom: 1px solid #d8d9d9;
  cursor: pointer;
}
.chat .chat-img {
  width: 60px;
  display: flex;
  flex:0;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
.chat .chat-conversation {
  padding-top: 10px;
  font-size: 14px;
  display: flex;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.chatting-text{
  justify-content: flex-start;
  flex: 1;
  padding-left: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .chat-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    b {
      color: #2a9898;
      font-size: 16px;
    }
  }
  .chatting-left{

  }
  .chatting-right{
    padding-top: 10px;
    
  }
}
</style>