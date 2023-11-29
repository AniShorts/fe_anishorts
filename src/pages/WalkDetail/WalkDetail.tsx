import className from "classnames/bind";
import styles from "./WalkDetail.module.scss";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { DetailModal } from "component/Main/DetailModal/DetailModal";
import { useNavigate } from "react-router-dom";

const cx = className.bind(styles);

const WalkDetail = () => {
  const navigation = useNavigate();

  const onClickBackIcon = () => {
    navigation(-1);
  };

  const [commentId, setCommentId] = useState<any>("");
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  const bindPress = useLongPress((_e, v) => {
    const id = v.context;
    setCommentId(id);
    setDetailModalVisible(true);
  });

  const modalHandle = (
    _type: "detail",
    visible: boolean,
    kind?: "delete" | "report"
  ) => {
    if (!visible) {
      setDetailModalVisible(false);
      console.log(kind, commentId);
    }
  };

  const [data] = useState([
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

  return (
    <div className={cx("container")}>
      {detailModalVisible && (
        <DetailModal modalHandle={modalHandle} kind="report" />
      )}
      <div className={cx("wrap")}>
        <div className={cx("handle_wrap")}>
          <img
            className={cx("down_img")}
            src="/images/icon/down.png"
            onClick={onClickBackIcon}
          />
          <img src="/images/icon/etc_black.png" className={cx("etc_img")} />
        </div>
        <img src={`/images/icon/walk.png`} className={cx("walk_img")} />
        <div className={cx("body")}>
          <div className={cx("profile")}>
            <img className={cx("profile_img")} src="/images/icon/profile.png" />
            <div>아이디입니다</div>
          </div>
          <div className={cx("title")}>
            내용 입니다내용 입니다내용 입니다내용 입니다내용 입니다내용
            입니다내용 입니다내용 입니다내용 입니다내용 입니다내용 입니다
          </div>
          <div className={cx("date")}>2023년 11월 29일</div>
        </div>
      </div>
      <div>
        <div className={cx("content_wrap")}>
          <div className={cx("content")}>
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ 잊마ㅚ옺미임죄잊뫼엊ㅁ
            잊마ㅚ옺미임죄잊뫼엊ㅁ
          </div>
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
            {data.map((v) => (
              <motion.div
                {...bindPress(v.id)}
                style={{
                  display: "flex",
                  fontSize: "16px",
                  padding: "13px 22px",
                }}
                whileTap={{ backgroundColor: "#3333334a" }}
              >
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
