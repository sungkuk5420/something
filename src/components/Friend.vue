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
          <div class="user-age">나이 : {{user?user.age:''}} / 키 : {{user?user.height:''}}</div>
          <div class="user-info-divide"></div>
          <div class="user-height"></div>
        </div>
        <div class="user-info-bottom">
          <div class="message">좋아요</div>
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

<style lang="scss" scoped>
.user {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #d8d9d9;
  min-height: 100px;
}

.user .user-img {
  width: 60px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
.user .chatting-text {
  justify-content: flex-start;
  flex: 1;
  padding-left: 20px;
  overflow: hidden;
}
.user .chatting-text .user-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  b {
    color: #2a9898;
    font-size: 16px;
  }
}

.user .chatting-text .user-conversation {
  padding-top: 10px;
  font-size: 14px;
  display: flex;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.user .chatting-date {
  width: 110px;
  font-size: 12px;
}
</style>