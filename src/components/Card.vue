<template>
  <div class="card">
    <div class="profile">
      <div class="left">
        <img :src="user?user.avatar:''" alt />
      </div>
      <div class="right">
        <div class="name">{{user?user.name:''}}</div>
        <div class="spec">
          <label for>나이 : {{user?user.age:''}}</label>
          <label for>키 : {{user?user.height:''}}</label>
        </div>
        <div class="condition">안녕안녕안녕</div>
      </div>
    </div>

    <div class="slide">
      <div class="left">싫어요</div>
      <div class="center">
        <img src="statics/icons/btn_slide.png" alt />
      </div>
      <div class="right">좋아요</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["user"],
};
</script>

<style scoped>
.card {
  background-color: #f7f8f8;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 15px;
}
.profile {
  display: flex;
}

.profile .right {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-left: 30px;
}
.profile .right .name {
  font-size: 18px;
  color: #294a73;
}

.profile .right .spec {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #333333;
}

.profile .right .condition {
  margin-top: 10px;
  color: #333333;
  font-size: 12px;
}

.profile .left img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.slide {
  background-color: #f7e4de;
  padding: 0 5px;
  display: flex;
  margin-top: 20px;
  font-size: 12px;
  border-radius: 3px;
}
.slide .left {
  display: flex;
  flex: 1;
  padding: 7px;
  align-items: center;
}
.slide .center {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
}
.slide .center img {
  width: 60px;
  height: 60px;
  position: absolute;
  top: -16px;
}
.slide .right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 7px;
  align-items: center;
}
</style>