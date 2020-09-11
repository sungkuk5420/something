<template>
  <div class="chat">
    <div class="user-img">
      <img :src="user?user.avatar:''" alt />
    </div>
    <div class="chatting-text">
      <div class="user-name">
        <b>{{user?user.name:''}}</b>
        <div class="chatting-date">8월 12일 오후 10:10</div>
      </div>
      <div class="user-conversation">
        <div class>横幅を縮めると、余った文字が省略表示されます。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["user"],
};
</script>

<style lang="scss">
.chat {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #d8d9d9;
  min-height: 100px;
}
.chat .user-img {
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
.chat .chatting-text .user-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  b {
    color: #2a9898;
    font-size: 16px;
  }
}

.chat .chatting-text .user-conversation {
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