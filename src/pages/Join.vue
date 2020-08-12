<template>
  <q-page class="join-page">
    <div class="main">
      <input type="text" class="inputbox" placeholder="이름" />
      <input type="text" class="inputbox" placeholder="학번" />
      <input type="text" class="inputbox" placeholder="비밀번호" />
      <input type="text" class="inputbox" placeholder="비밀번호 확인" />
      <router-link to="/" class="btn1">회원가입</router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style lang="scss">
.q-page.join-page {
  .main {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
