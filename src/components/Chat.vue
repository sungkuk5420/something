<template>
  <div class="chat relative-position" v-ripple>
    <div class="chat-img">
      <img :src="chat?chat.avatar:''" alt />
    </div>
    <div class="chatting-text">
      <div class="chat-name">
        <b>{{chat?chat.name:''}}</b>
        <div class="chatting-date">{{chat.time}}</div>
      </div>
      <div class="chat-conversation">
        <div class>{{chat.text}}</div>
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
  padding: 10px;
  border-bottom: 1px solid #d8d9d9;
  min-height: 50px;
  cursor: pointer;
}
.chat .chat-img {
  width: 60px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
.chat .chatting-text {
  justify-content: flex-start;
  flex: 1;
  padding-left: 20px;
  overflow: hidden;
}
.chat .chatting-text .chat-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  b {
    color: #2a9898;
    font-size: 16px;
  }
}

.chat .chatting-text .chat-conversation {
  padding-top: 10px;
  font-size: 14px;
  display: flex;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.chat .chatting-date {
  width: 110px;
  font-size: 12px;
}
</style>