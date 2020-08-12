<template>
  <q-layout view="hHh lpR fFf">
    <q-header height-hint="98">
      <img src="statics/icons/logo_something_main.png" alt />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="text-white">
      <q-tabs align="left">
        <q-route-tab to="/page1">
          <img src="statics/icons/btn_inu_off.png" class="off active" alt />
          <img src="statics/icons/btn_inu_on.png" class="on" alt />
        </q-route-tab>
        <q-route-tab to="/page2">
          <img src="statics/icons/btn_help_off.png" class="off active" alt />
          <img src="statics/icons/btn_help_on.png" class="on" alt />
        </q-route-tab>
        <q-route-tab to="/page3">
          <img src="statics/icons/btn_log_off.png" class="off" alt />
          <img src="statics/icons/btn_log_on.png" class="on active" alt />
        </q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
.q-header {
  display: flex;
  background-color: #f7d1c5;
  justify-content: center;
  img {
    width: 150px;
    margin-top: 8px;
  }
}
.q-page {
  background-color: #eff0f0;

  & > .main {
    flex: 1;
    overflow: auto;
    background-color: #eff0f0;
    padding: 0 30px;

    .inputbox {
      background-color: #ffffff;
      border: 0.5px solid #817e7f;
      height: 50px;
      padding: 0 10px;
      border-top-width: 0;
    }
    .inputbox:first-child {
      border-top-width: 0.5px;
    }
    .inputbox::placeholder {
      color: #000000;
    }
    .checkbox-row {
      display: flex;
      align-items: center;
      margin-top: 15px;
    }
    .checkbox {
      border-radius: 50%;
      color: #000000;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .btn1 {
      margin-top: 15px;
      background-color: #f7d1c5;
      border: 0.5px solid #817e7f;
      font-size: 15px;
      height: 40px;
    }
    .btn2 {
      margin-top: 10px;
      border: 0;
      font-size: 15px;
      height: 40px;
    }
  }
}

.q-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  background: white;
}
.q-footer img {
  width: 60px;
  cursor: pointer;
  display: none;
}

.q-footer img.active {
  display: block;
}
</style>