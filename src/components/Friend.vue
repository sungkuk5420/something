<template>
  <div class="user">
    <div class="user-img">
      <img :src="user?user.avatar:''" alt />
    </div>
    <div class="chatting-text">
      <div class="user-name">
        <b>{{user?user.name:''}}</b>
      </div>
      <div class="user-info">
        <div class="user-info-top">
          <div class="user-age">나이 : {{user?user.age:''}}</div>
          <div class="user-info-divide">/</div>
          <div class="user-height">키 : {{user?user.height:''}}</div>
        </div>
        <div class="user-info-bottom">
          <div class="message">안녕안녕안녕</div>
        </div>
      </div>
    </div>
    <div class="chatting-start">
      <img src="statics/image/btn_chat_start.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Friend",
  props: ["user"],
};
</script>

<style scoped>
.user {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #d8d9d9;
  min-height: 100px;
}
.user .user-img img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.user .chatting-text {
  justify-content: flex-start;
  flex: 1;
  padding-left: 30px;
}
.user .chatting-text .user-name {
  color: #2a9898;
  font-size: 23px;
}
.user .chatting-text .user-conversation {
  padding-top: 10px;
  font-size: 18px;
}
.user .chatting-text .chatting-date {
  width: 140px;
  font-size: 12px;
}
</style>