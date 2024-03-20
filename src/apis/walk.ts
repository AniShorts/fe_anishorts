import instance from "apis";

export const GetWalkList = async (pageNumber: string): Promise<any> => {
  const { data } = await instance.get(
    process.env.REACT_APP_SERVER + `walks/list/${pageNumber}`
  );
  return data;
};
