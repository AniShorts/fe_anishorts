import instance from "apis";

type UserInfo = {};

export const GetUser = async (): Promise<any> => {
  const { data } = await instance.get(
    process.env.REACT_APP_SERVER + `users/info`
  );
  return data;
};
