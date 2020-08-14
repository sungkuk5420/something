<template>
  <q-page class="profile-page">
    <div class="main">
      <div class="card">
        <div class="profile">
          <div class="left">
            <img src="statics/image/woman-1.jpg" alt />
          </div>
          <div class="right">
            <div class="name">김형수(35)</div>
            <div class="spec">
              <span>K.WILL</span>
              <span>알라뷰 내 남자</span>
            </div>
          </div>
        </div>
      </div>
      <div class="Badge">
        <div class="title">사진앨범</div>
        <div class="image-box">
          <img src="statics/image/woman-3.jpg" alt />
          <img src="statics/image/woman-3.jpg" alt />
          <img src="statics/image/woman-3.jpg" alt />
          <img src="statics/image/woman-3.jpg" alt />
          <img src="statics/icons/btn_view.png" alt />
        </div>
      </div>
      <div class="Badge">
        <div class="title">뱃지</div>
        <div class="image-box">
          <img src="statics/image/woman-5.jpg" alt />
          <img src="statics/image/woman-5.jpg" alt />
          <img src="statics/image/woman-5.jpg" alt />
          <img src="statics/image/woman-5.jpg" alt />
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
}
</style>
