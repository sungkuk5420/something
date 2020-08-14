<template>
  <div class="modal">
    <div class="popup">
      <div class="header">당신의 성별을 선택하세요.</div>
      <div class="buttons">
        <div class="man" @click="function(){closeModal('man')}">
          <img src="statics/icons/btn_man_off.png" class="off" alt :class="sex!='man'?'active':''" />
          <img src="statics/icons/btn_man_on.png" class="on" alt :class="sex=='man'?'active':''" />
        </div>
        <div class="girl" @click="function(){closeModal('woman')}">
          <img
            src="statics/icons/btn_girl_off.png"
            class="off"
            alt
            :class="sex!='woman'?'active':''"
          />
          <img src="statics/icons/btn_girl_on.png" class="on" alt :class="sex=='woman'?'active':''" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { T } from "../store/module-example/types";
export default {
  name: "Card",
  data() {
    return {
      sex: "",
    };
  },
  mounted() {
    this.sex = "";
  },
  methods: {
    closeModal(sex) {
      const thisObj = this;
      thisObj.loading = true;
      thisObj.sex = sex;
      setTimeout(() => {
        thisObj.$store
          .dispatch(T.SEX_MODAL_VISIABLE, {
            data: {
              modalVisiable: false,
              sex,
            },
          })
          .then(() => {
            thisObj.sex = "";
          });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 30%);
  top: 0;
  left: 0;
  z-index: 10000;
}
.popup {
  position: absolute;
  top: 30%;
  max-width: 300px;
  width: 80%;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 5px;
  z-index: 1;
  background: white;
  box-shadow: 3px 3px 3px 3px #999;
}

.popup .header {
  display: flex;
  color: #191717;
  justify-content: center;
  background-color: #f7d1c5;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
}
.popup .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff0f0;
  padding: 20px 0;
  height: 100%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.popup .buttons img {
  width: 135px;
  cursor: pointer;
  display: none;
  padding: 3px;
}

.popup .buttons img.active {
  display: block;
}
</style>