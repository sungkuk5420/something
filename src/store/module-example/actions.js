import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.AJAX_ACTION]({ commit }, { data, cb }) {
    console.log(`store action [T.AJAX_ACTION] joinUser = ${data}`);
    ajaxActions.joinUser(
      data,
      results => {
        console.log(`action / AJAX_ACTION / success`);
        console.log(" reults=", results);
        if (cb) {
          cb(results);
        }
      },
      res => {
        console.log(`action / AJAX_ACTION / error`, res);
        commit(T.AJAX_ACTION);
      }
    );
  },
  [T.SEX_MODAL_VISIABLE]({ commit }, { data, successCb, errorCb }) {
    console.log(`store SEX_MODAL_VISIABLE [T.SEX_MODAL_VISIABLE] data`);
    console.log(data);
    successCb()
    commit(T.SEX_MODAL_VISIABLE, data);
  },
  [T.SET_LOGIN_USER]({ commit }, { data, successCb, errorCb }) {
    console.log(`store SET_LOGIN_USER [T.SET_LOGIN_USER] data`);
    console.log(data);
    commit(T.SET_LOGIN_USER, data.loginUser);
  },
};
