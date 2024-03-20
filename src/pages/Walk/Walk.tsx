import className from "classnames/bind";
import styles from "./Walk.module.scss";
import { Footer } from "component/Footer";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { GetWalkList, GetWalkListDTO } from "apis/walk";
import { useRecoilState } from "recoil";
import { errorTextState } from "recoil/atom";

const cx = className.bind(styles);

const Walk = () => {
  const [_, setErrorText] = useRecoilState(errorTextState);

  const [data, setData] = useState<GetWalkListDTO[]>([]);

  const location = useLocation();
  const navigate = useNavigate();
  const onClickHandle = (id?: number) => {
    if (id) {
      navigate(`${location.pathname}/${id}`);
    } else {
      navigate(`${location.pathname}/create`);
    }
  };

  useQuery(["GetWalkList"], () => GetWalkList("1"), {
    onSuccess(data) {
      const newData = data.walks;
      setData(
        newData.map((v, idx) => {
          return {
            walkId: v.walkId,
            createAt: "",
            userId: v.userId,
            title: "dwadwa",
            createNickNmae: "dawdwa",
            src: idx === 0 ? "dawdwa" : "",
            content: "dawda",
            viewCount: 0,
            commentCount: 0,
            likeCount: 0,
          };
        })
      );
    },
    onError(error: any) {
      setErrorText(error?.response.data.result.message);
    },
  });

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
              placeholder="게시물 검색하기(제목, 작성자)"
              className={cx("seartch_input")}
            />
          </div>
          <img
            onClick={() => onClickHandle()}
            className={cx("note_img")}
            src="/images/icon/note.png"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={cx("label")}>
        <div className={cx("label_body")}>POST</div>
        <div className={cx("body")}>
          {data.map((v) => (
            <div onClick={() => onClickHandle(v.walkId)} className={cx("item")}>
              {v.src && <img className={cx("profile_img")} src={v.src} />}
              <div style={{ marginLeft: !v.src ? "38px" : "0", width: "100%" }}>
                <div className={cx("nickname")}>{v.createNickNmae}</div>
                <div className={cx("content")}>{v.content}</div>
                <div className={cx("count_wrap")}>
                  <div>조회수 {v.viewCount > 999 ? "999+" : v.viewCount}</div>
                  <div className={cx("line")} />
                  <div>
                    댓글 {v.commentCount > 999 ? "999+" : v.commentCount}
                  </div>
                  <div className={cx("line")} />
                  <div>추천 {v.likeCount > 999 ? "999+" : v.likeCount}</div>
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
