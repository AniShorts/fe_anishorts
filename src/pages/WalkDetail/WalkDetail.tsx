import className from "classnames/bind";
import styles from "./WalkDetail.module.scss";
import { useEffect, useState } from "react";
import { useLongPress } from "use-long-press";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { GetWalkDetail, GetWalkDetailDTO } from "apis/walk";
import { useRecoilState } from "recoil";
import { errorTextState } from "recoil/atom";

const cx = className.bind(styles);

const WalkDetail = () => {
  // const { getQueryUser } = useBindGetUserHook();

  const [_, setErrorText] = useRecoilState(errorTextState);
  const location = useLocation();

  const navigation = useNavigate();

  const onClickBackIcon = () => {
    navigation(-1);
  };

  const [commentId, setCommentId] = useState<any>("");
  const [isMine, setIsMine] = useState(false);
  const [commentisMine, setCommentIsMine] = useState(false);
  const [more, setMore] = useState(false);

  const bindPress = useLongPress((_e, v) => {
    const id = v.context;
    setCommentId(id);
  });

  const onClickEtcIcon = () => {
    setMore((prev) => !prev);
  };

  const [data, setData] = useState<GetWalkDetailDTO>();

  const [comment, setComment] = useState([
    {
      nick_name: "룰라리",
      id: uuidv4(),
      content:
        "dawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwada",
      src: "/images/icon/walk.png",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
  ]);

  // useEffect(() => {
  //   console.log(getQueryUser.data);
  // }, [getQueryUser.data]);

  const [detailId] = useState(location.pathname.split("walk/")[1]);

  useQuery(["GetWalkDetail", detailId], () => GetWalkDetail(String(detailId)), {
    onSuccess(data) {
      const newData = data.result;
      setData(newData);
    },
    onError(error: any) {
      setErrorText(error?.response.data.result.message);
    },
    enabled: !!detailId,
  });

  return (
    <div className={cx("container")} onClick={() => setMore(false)}>
      <div className={cx("wrap")}>
        <div className={cx("handle_wrap")}>
          <img
            className={cx("down_img")}
            src="/images/icon/down.png"
            onClick={onClickBackIcon}
          />
          <div style={{ position: "relative" }}>
            <img
              onClick={(e) => {
                e.stopPropagation();
                onClickEtcIcon();
              }}
              src="/images/icon/etc_black.png"
              className={cx("etc_img")}
            />
            <AnimatePresence>
              {more && (
                <motion.div
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "30px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    width: "100px",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  initial={{
                    opacity: more ? 0 : 1,
                    y: -20,
                  }}
                  animate={{
                    opacity: more ? 2 : 0,
                    y: 0,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px 0",
                      borderRadius: "8px 8px 0 0",
                      cursor: "pointer",
                    }}
                    whileHover={{ backgroundColor: "#e0e0e0" }}
                  >
                    {isMine ? "수정하기" : "신고하기"}
                  </motion.div>
                  <motion.div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px 0",
                      cursor: "pointer",
                    }}
                    whileHover={{ backgroundColor: "#e0e0e0" }}
                  >
                    공유하기
                  </motion.div>
                  <motion.div
                    onClick={() => setMore(false)}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px 0",
                      cursor: "pointer",
                      borderRadius: "0 0 8px 8px",
                    }}
                    whileHover={{ backgroundColor: "#e0e0e0" }}
                  >
                    닫기
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <img src={`/images/icon/walk.png`} className={cx("walk_img")} />
        <div className={cx("body")}>
          <div className={cx("profile")}>
            <img className={cx("profile_img")} src="/images/icon/profile.png" />
            <div>{data?.user?.nickname}</div>
          </div>
          <div className={cx("title")}>{data?.walkTitle}</div>
          <div className={cx("date")}>{data?.createAt}</div>
        </div>
      </div>
      <div>
        <div className={cx("content_wrap")}>
          <div className={cx("content")}>{data?.walkContent}</div>
          <div className={cx("btn")}>
            <img
              className={cx("chatting_img")}
              src="/images/icon/chatting_pupple.png"
            />
            <div>채팅 참여하기</div>
          </div>
        </div>
        <div className={cx("chat_container")}>
          <div className={cx("like_wrap")}>
            <img className={cx("like_img")} src="/images/icon/heart_able.png" />
            <div>10명이 좋아요를 눌렀습니다.</div>
          </div>
          <div className={cx("map_container")}>
            {comment.map((v) => (
              <motion.div
                {...bindPress(v.id)}
                style={{
                  display: "flex",
                  fontSize: "16px",
                  padding: "13px 22px",
                  position: "relative",
                }}
                whileTap={{ backgroundColor: "#3333334a" }}
              >
                <AnimatePresence>
                  <motion.div
                    style={{
                      position: "absolute",
                      backgroundColor: "#3333337b",
                      width: "100%",
                      height: "100%",
                      left: "0",
                      top: "0",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "17px",
                    }}
                    initial={{
                      opacity: v.id === commentId ? 0 : 1,
                      y: 20,
                    }}
                    animate={{
                      opacity: v.id === commentId ? 1 : 0,
                      y: 0,
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      style={{
                        color: "#fff",
                        backgroundColor: "#ff7e84",
                        width: "120px",
                        padding: "10px 0",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "7px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "600",
                        letterSpacing: "0.32px",
                      }}
                      whileTap={{ scale: "1.05" }}
                    >
                      {commentisMine ? "삭제하기" : "신고하기"}
                    </motion.div>
                    <motion.div
                      style={{
                        color: "#fff",
                        backgroundColor: "#ff7e84",
                        width: "120px",
                        padding: "10px 0",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "7px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "600",
                        letterSpacing: "0.32px",
                      }}
                      onClick={() => setCommentId("")}
                      whileTap={{ scale: "1.05" }}
                    >
                      닫기
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <img
                  className={cx("pointer_img")}
                  src={v.src ? v.src : "/images/icon/profile.png"}
                />
                <div className={cx("chat_wrap")}>
                  <div className={cx("chat_body")}>
                    <div className={cx("chat_nickname")}>{v.nick_name}</div>
                    <div className={cx("chat_time")}>{v.time}</div>
                  </div>
                  <div>{v.content}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkDetail;
