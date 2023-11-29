import className from "classnames/bind";
import styles from "./Walk.module.scss";
import { Footer } from "component/Footer";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

const cx = className.bind(styles);

const Walk = () => {
  const [data] = useState([
    {
      nick_name: "룰라리",
      id: uuidv4(),
      content: "dawdwadwadadawdwadwadadawdwadwadadawdwadwada",
      src: "/images/icon/walk.png",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
  ]);

  const location = useLocation();
  const navigate = useNavigate();
  const onClickHandle = (id: string) => {
    navigate(`${location.pathname}/${id}`);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("search_cotainer")}>
        <div className={cx("logo_wrap")}>
          <img className={cx("logo_img")} src="/images/icon/post_logo.png" />
        </div>
        <div className={cx("search_wrap")}>
          <div className={cx("search_input")}>
            <div>
              <img
                className={cx("search_img")}
                src="/images/icon/search_gray.png"
              />
            </div>
            <input
              placeholder="게시물 검색하기"
              className={cx("seartch_input")}
            />
          </div>
          <img className={cx("note_img")} src="/images/icon/note.png" />
        </div>
      </div>
      <div className={cx("label")}>
        <div className={cx("label_body")}>POST</div>
        <div className={cx("body")}>
          {data.map((v) => (
            <div onClick={() => onClickHandle(v.id)} className={cx("item")}>
              {v.src && <img className={cx("profile_img")} src={v.src} />}
              <div style={{ marginLeft: !v.src ? "38px" : "0", width: "100%" }}>
                <div className={cx("nickname")}>{v.nick_name}</div>
                <div className={cx("content")}>{v.content}</div>
                <div className={cx("count_wrap")}>
                  <div>
                    조회수 {+v.view_count > 999 ? "999+" : v.view_count}
                  </div>
                  <div className={cx("line")} />
                  <div>
                    댓글 {+v.comment_count > 999 ? "999+" : v.comment_count}
                  </div>
                  <div className={cx("line")} />
                  <div>추천 {+v.like > 999 ? "999+" : v.like}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        whileTap={{ scale: "0.9" }}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "100%",
          backgroundColor: "#000",
          position: "absolute",
          bottom: "110px",
          right: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          style={{ width: "28px", marginBottom: "-4px" }}
          src="/images/icon/chatting_pupple.png"
        />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Walk;
