import className from "classnames/bind";
import styles from "./Walk.module.scss";
import { Footer } from "component/Footer";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { GetWalkList } from "apis/walk";

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

  useQuery(
    [
      "GetWalkList",
      "의존성 배열 ex) currentPage = 쿼리를 한 번 더 요청하고 싶을 때 씀",
    ],
    () =>
      GetWalkList(
        "0"
        //api에서 필요값 넣어주는 부분 앞에 0은 pageNumber임
      ),
    {
      onSuccess(data) {
        console.log(data);
      },
      onError(err) {
        console.log(err);
      },
      // 옵션값 이 값을 넣어두면 enabled가 true일 시에만 쿼리를 요청함, 위 의존성배열에 의지해서 요청됌
      // ex) 디테일 id가 있을때 요청되야 하는데 그냥 요청 될시 넣어주면 좋음
    }
  );

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
