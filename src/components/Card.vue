<template>
  <div class="card" ref="card" :if="users" :class="isFadeOut">
    <div class="profile">
      <div class="left">
        <img class="avatar" :src="users[0]?users[0].avatar:''" alt />
        <div class="user-info">
          <div class="spec">
            <label for>나이 : {{users[0]?users[0].age:''}}</label>
            <label for>키 : {{users[0]?users[0].height:''}}</label>
          </div>
          <div class="condition">안녕안녕안녕</div>
        </div>
      </div>
      <div class="center">vs</div>
      <div class="right">
        <img class="avatar" :src="users[1]?users[1].avatar:''" alt />
        <div class="user-info">
          <div class="spec">
            <label for>나이 : {{users[1]?users[1].age:''}}</label>
            <label for>키 : {{users[1]?users[1].height:''}}</label>
          </div>
          <div class="condition">안녕안녕안녕</div>
        </div>
      </div>
    </div>

    <div class="slide">
      <q-slider :value="lazy" @change="val => { lazy = val }" :min="0" :max="10" :step="5" />
      <div class="left">
        <div class="name">{{users[0]?users[0].name:''}}</div>
      </div>
      <div class="center"></div>
      <div class="right">
        <div class="name">{{users[1]?users[1].name:''}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "quasar";
export default {
  name: "Card",
  props: ["users",],
  data() {
    return {
      lazy: 5,
      isFadeOut:""
    };
  },
  watch: {
    users(value){
      console.log("change users !!")
      console.log(value)
      this.lazy = 5;
      this.isFadeOut = "";
    },
    lazy(value) {
      console.log()
      if (value == 0) {
        this.message(this.users[0].name);
      } else if (value == 10) {
        this.message(this.users[1].name);
      }else if (value == 5) {
        return false;
      }
      this.isFadeOut="fadeOut";
      // const thisCard = this.$refs.card;
      // thisCard.classList.add("fadeOut");
    },
  },
  methods:{
    message(text) {
      Notify.create({
        color: "white",
        textColor: "black",
        message: text,
        position: "top",
        timeout: 3000,
      });
    },
  }
};
</script>
<style scoped lang="scss">
.card {
  background-color: #f7f8f8;
  border-radius: 15px;
  padding: 20px;

  margin-bottom: 15px;
  &.fadeOut {
    transition: 1s cubic-bezier(0.77, 0.5, 0.54, 0.91);
    animation: fadeOut 0.8s cubic-bezier(0.84, 0, 0.62, 1.01);
    opacity: 0;
    margin-top: -270px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      height: auto;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes heightZero {
    0% {
      height: auto;
    }

    100% {
      height: 0;
    }
  }
}
.profile {
  display: flex;

  img.avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .center {
    flex: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fcaf17;
    font-size: 40px;
    font-weight: bold;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    .spec {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: #333333;
    }
    .condition {
      margin-top: 10px;
      color: #333333;
      font-size: 12px;
    }
  }
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
  .name {
    font-size: 16px;
    color: #294a73;
    line-height: 14px;
  }
}
.slide .left {
  display: flex;
  flex: 1;
  padding: 7px 0;
  align-items: center;
  z-index: 0;
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
  z-index: 2;
}
.slide .right {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 7px 0;
  align-items: center;
  z-index: 0;
}
</style>

<style lang="scss">
.q-slider__thumb-container.q-slider__thumb-container--h.absolute.non-selectable {
  width: 50px;
  height: 50px;
  transform: scale(1);
  transform: translate(-25px, -20px);
  svg {
    width: 50px;
    height: 50px;
  }
}
.q-slider--active .q-slider__focus-ring,
.q-slider--active.q-slider--label .q-slider__thumb {
  transform: scale(1) !important;
}
.q-slider__track-container {
  background: none;
}
.q-slider__track.q-slider__track--h.absolute {
  z-index: -1;
}
.q-slider__track-container.q-slider__track-container--h.absolute {
  color: #ffffff00 !important;
}
.q-slider__thumb.absolute {
  background-image: url("../statics/icons/btn_slide.png");
  background-size: 50px 50px;
  color: #ffffff00;
  opacity: 1;
}
</style>