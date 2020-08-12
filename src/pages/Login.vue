<template>
  <q-page class="login-page">
    <div class="main">
      <input type="text" class="inputbox" placeholder="학번" />
      <input type="text" class="inputbox" placeholder="비밀번호" />
      <label class="checkbox-row">
        <input type="checkbox" class="checkbox" value="autologin" /> 자동로그인
      </label>
      <input type="button" class="btn1" value="로그인" />
      <router-link to="join" class="btn1">회원가입</router-link>
      <input type="button" class="btn2" value="비밀번호 찾기" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style lang="scss">
.q-page.login-page {
  .main {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
