import instance from "apis";

type GetWalkListReponseDTO = {
  success: boolean;
  walks: GetWalkListDTO[];
  pageNum: number;
  pageList: number[];
};

export type GetWalkListDTO = {
  walkId: number;
  createAt: string;
  userId: number;
  title: string;
  createNickNmae: string;
  src: string;
  content: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
};

export const GetWalkList = async (
  pageNumber: string
): Promise<GetWalkListReponseDTO> => {
  const { data } = await instance.get(
    process.env.REACT_APP_SERVER + `walks/list/${pageNumber}`
  );
  return data;
};

type GetWalkDetailReponseDTO = {
  success: boolean;
  result: GetWalkDetailDTO;
};

export type GetWalkDetailDTO = {
  walkId: number;
  walkTitle: string;
  walkContent: string;
  location: string;
  createAt: string;
  maxNum: number;
  curNum: number;
  user: {
    nickname: string;
  };
  chat: {
    chatId: number;
  };
};

export const GetWalkDetail = async (
  walkId: string
): Promise<GetWalkDetailReponseDTO> => {
  const { data } = await instance.get(
    process.env.REACT_APP_SERVER + `walks/${walkId}`
  );
  return data;
};
