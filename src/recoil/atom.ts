import { atom } from "recoil";

export const userData = atom({
  key: "userData",
  default: {},
});

export const errorTextState = atom<string>({
  key: "errorTextState",
  default: "",
});
