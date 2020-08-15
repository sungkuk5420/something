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
      <q-slider :value="lazy" @change="val => { lazy = val }" :min="0" :max="10" :step="5" />
      <div class="left">싫어요</div>
      <div class="center"></div>
      <div class="right">좋아요</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["user"],
  data() {
    return {
      lazy: 5,
    };
  },
};
</script>
<style scoped lang="scss">
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
  display: flex;
  margin-top: 20px;
  font-size: 12px;
  border-radius: 3px;
  position: relative;
  padding: 0 10%;
  .q-slider {
    position: absolute;
    width: 80%;
    z-index: 1;
  }
}
.slide .left {
  display: flex;
  flex: 1;
  padding: 7px 0;
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
  padding: 7px 0;
  align-items: center;
}
</style>

<style lang="scss">
.q-slider__thumb-container.q-slider__thumb-container--h.absolute.non-selectable {
  width: 50px;
  height: 50px;
  transform: scale(1);
  transform: translate(-25px, -20px);
  svg {
    transform: translate(-25px, -20px);
    width: 50px;
    height: 50px;
    transform: scale(1);
  }
}
.q-slider--active .q-slider__focus-ring,
.q-slider--active.q-slider--label .q-slider__thumb {
  transform: scale(1) !important;
}
.q-slider__track-container.q-slider__track-container--h.absolute {
  color: #f7e4de !important;
}
.q-slider__thumb.absolute {
  background-image: url("../statics/icons/btn_slide.png");
  background-size: 50px 50px;
  color: #ffffff00;
  opacity: 1;
}
</style>