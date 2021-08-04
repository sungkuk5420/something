<template>
  <q-page class="profile-page">
    <div class="main">
      <div class="card">
        <div class="profile">
          <div class="left">
            <img src="statics/image/man-5.jpg" alt />
          </div>
          <div class="right">
            <div class="name">홍길동 (29)</div>
            <div class="spec">
              <span>안녕하세요 </span>
              <span>좋은 인연 만나고 싶습니다.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Badge">
        <div class="title">사진앨범</div>
        <div class="image-box">
          <img src="statics/image/man-1.jpg" alt />
          <img src="statics/image/man-2.jpg" alt />
          <img src="statics/image/man-3.jpg" alt />
          <img src="statics/image/man-4.jpg" alt />
          <img src="statics/icons/btn_view.png" alt />
        </div>
      </div>
      <div class="Badge">
        <div class="title">뱃지</div>
        <div class="image-box">
          <div class="icon-wrapper">
            <q-icon name="favorite" />
          </div>
          <div class="icon-wrapper">
            <q-icon name="rowing" />
          </div>
          <div class="icon-wrapper">
            <q-icon name="sports_cricket" />
          </div>
          <div class="icon-wrapper">
            <q-icon name="palette" />
          </div>
          <div class="icon-wrapper">
            <q-icon name="flight" />
          </div>
          <img src="statics/icons/btn_view.png" alt />
        </div>
      </div>
      <div class="information">
        <div class="title">추가정보</div>
        <span>성격</span>
        <span>취미</span>
        <span>이상형</span>
      </div>
    </div>
  </q-page>
</template>

<script>
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
export default {
  name: "Setting",
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.q-page.profile-page {
  .main {
    .card {
      padding: 15px 10px;
      display: flex;
      border-radius: 50%;
      .profile {
        display: flex;
        .left {
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        .right {
          padding: 10px 0 10px 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .name {
            font-size: 20px;
          }
          .spec {
            display: flex;
            flex-direction: column;
            font-size: 15px;
          }
        }
      }
    }

    .title {
      font-size: 16px;
      color: #294a73;
      display: flex;
      padding-left: 5px;
    }
    .Badge {
      flex-direction: column;
      display: flex;
      background-color: #f7f8f8;
      border-radius: 15px;
      padding: 5px 20px;
      margin-bottom: 15px;
    }

    .Badge .image-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .Badge img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      &:hover {
        cursor: pointer;
      }
    }

    .Badge img:last-child {
      width: 60px;
      height: 60px;
    }

    .information {
      background-color: #f7f8f8;
      display: flex;
      flex-direction: column;
      border-radius: 15px;
      padding-left: 15px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 15px;
      margin-bottom: 15px;
    }
    .information span {
      border-bottom: 1px solid #dcdddd;
      font-size: 14px;
      padding: 5px 10px;
    }
    .information span:first-child {
      color: #294a73;
      font-size: 16px;
      padding-left: 10px;
    }
  }

  .icon-wrapper{
    font-size: 24px;
    background: #f7d1c5;
    border-radius: 50%;
    min-width: 35px;
    width: 35px;
    height:35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:0;
    color: #5d5d5d;
  }
}
</style>
