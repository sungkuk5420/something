import { T } from "./types";

export const mutations = {
  [T.SEX_MODAL_VISIABLE](state, data) {
    console.log(data.sex)
    state.sexModalVisiable = data.modalVisiable;
    if (data.sex == 'man') {
      state.mainTutorialUserList = [
        [{
          name: "여자 1",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-1.jpg"
        },
        {
          name: "여자 2",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-2.jpg"
        }],
        [{
          name: "여자 3",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-3.jpg"
        },
        {
          name: "여자 4",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-4.jpg"
        }],
        [{
          name: "여자 5",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-5.jpg"
        },
        {
          name: "여자 6",
          age: 22,
          height: 163,
          avatar: "statics/image/woman-6.jpg"
        }],
      ];
    } else if (data.sex == 'woman') {
      state.mainTutorialUserList = [
        [{
          name: "남자 1",
          age: 28,
          height: 178,
          avatar: "statics/image/man-1.jpg"
        },
        {
          name: "남자 2",
          age: 28,
          height: 178,
          avatar: "statics/image/man-2.jpg"
        }],
        [{
          name: "남자 3",
          age: 28,
          height: 178,
          avatar: "statics/image/man-3.jpg"
        },
        {
          name: "남자 4",
          age: 28,
          height: 178,
          avatar: "statics/image/man-4.jpg"
        }],
        [{
          name: "남자 5",
          age: 28,
          height: 178,
          avatar: "statics/image/man-5.jpg"
        },
        {
          name: "남자 6",
          age: 28,
          height: 178,
          avatar: "statics/image/man-6.jpg"
        }],
      ];
    } else {
      state.mainTutorialUserList = [];
    }
    console.log(state.mainTutorialUserList)
  },
  [T.SET_LOGIN_USER](state, loginUser) {
    console.log(loginUser)
    state.loginUser = loginUser;
  }
};
