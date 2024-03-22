import instance from "apis";

export const GetVideo = async (): Promise<any> => {
  const { data } = await instance.get(process.env.REACT_APP_SERVER + "videos");
  return data;
};
