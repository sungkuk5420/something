<template>
  <div class="chat">
    <div class="user-img">
      <img :src="user?user.avatar:''" alt />
    </div>
    <div class="chatting-text">
      <div class="user-name">
        <b>{{user?user.name:''}}</b>
      </div>
      <div class="user-conversation">땡큐</div>
    </div>
    <div class="chatting-date">8월 12일 오후 10:10</div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["user"],
};
</script>

<style scoped>
.chat {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #d8d9d9;
  min-height: 100px;
}
.chat .user-img img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.chat .chatting-text {
  justify-content: flex-start;
  flex: 1;
  padding-left: 30px;
}
.chat .chatting-text .user-name {
  color: #2a9898;
  font-size: 23px;
}
.chat .chatting-text .user-conversation {
  padding-top: 10px;
  font-size: 18px;
}
.chat .chatting-text .chatting-date {
  width: 140px;
  font-size: 12px;
}
</style>