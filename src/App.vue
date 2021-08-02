<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.q-header{
  border: 1px solid #ddd;
  border-bottom: 0;
}
.q-page-container{
  min-height:812px;
  border: 1px solid #ddd;
}
.q-footer{
  border-top: 0;
  border: 1px solid #ddd;
}

html,
body{
  width: 100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#q-app,
.q-layout,
.q-page-container{
  overflow: auto;
  max-height: 812px;
}
.q-page-container{
  position: relative;
}
#q-app,
.q-header,
.q-footer
{
  width: 100%;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: flex-start;
}
.q-layout,
.q-page
{
  min-height: auto !important;
}
html,
body,
.q-layout,
#q-app,
.q-page-container,
.q-page,
.main{
  height: 100%;
}
.q-page{
  
}
.q-header,
.q-footer{
  position: absolute;
}
.tutorial{
  max-width: 375px;
  max-height: 812px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.q-tabs{
  display: flex;
  width: 100%;
  flex:1;
}
.q-tabs__content{
  flex:1;
}
.q-header .q-tab__content, .q-footer .q-tab__content{
  min-width: auto;
}
</style>