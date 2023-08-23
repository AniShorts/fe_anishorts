import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {},
});

export const nicknameState = atom({
  key: "nicknameState",
  default: "", // Initial value for nickname
});

export const passwordState = atom({
  key: "passwordState",
  default: "", // Initial value for password
});
