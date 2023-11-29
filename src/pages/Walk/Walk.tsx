import className from "classnames/bind";
import styles from "./Walk.module.scss";
import { Footer } from "component/Footer";
import { useState } from "react";

const cx = className.bind(styles);

const Walk = () => {
  const [data, setData] = useState([
    {
      nick_name: "룰라리",
      content: "dawdwadwada",
      src: "/images/icon/more.png",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      nick_name: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
  ]);

  return (
    <div className={cx("container")}>
      <div
        style={{
          backgroundColor: "#fff",
          paddingBottom: "30px",
          paddingTop: "55px",
          minHeight: "207px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "53vw", maxWidth: "250px", marginBottom: "40px" }}
            src="/images/icon/post_logo.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            height: "44px",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: "5px",
              backgroundColor: "#f2f2f2",
              padding: "10px",
              gap: "10px",
              width: "calc(100% - 100px)",
            }}
          >
            <div>
              <img
                style={{
                  width: "30px",
                  marginTop: "-5px",
                }}
                src="/images/icon/search_gray.png"
              />
            </div>
            <input
              placeholder="게시물 검색하기"
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
                fontSize: "18px",
                width: "100%",
              }}
            />
          </div>
          <img
            style={{ width: "40px", marginTop: "-13px", cursor: "pointer" }}
            src="/images/icon/note.png"
          />
        </div>
      </div>
      <div style={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            padding: "26px 30px 14px 35px",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderBottom: "solid 2px #f2f2f2",
            whiteSpace: "nowrap",
            fontSize: "11px",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              fontWeight: "700",
            }}
          >
            POST
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              cursor: "pointer",
              marginTop: "3px",
            }}
          >
            <div>최신순</div>
            <img
              style={{ height: "7px", marginTop: "1.5px" }}
              src="/images/icon/down.png"
            />
          </div>
        </div>
        <div
          style={{
            height: "calc(100% - 378px)",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            borderBottom: "solid 2px #f2f2f2",
          }}
        >
          {data.map((v) => (
            <div
              style={{
                display: "flex",
                minHeight: "84px",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              {v.src && (
                <img
                  style={{
                    height: "100%",
                    width: "128px",
                    backgroundSize: "100% 100%",
                    marginRight: "15px",
                  }}
                  src={v.src}
                />
              )}
              <div style={{ marginLeft: !v.src ? "38px" : "0" }}>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#484848",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  {v.nick_name}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {v.content}
                </div>
                <div
                  style={{
                    display: "flex",
                    height: "13px",
                    fontSize: "13px",
                    color: "#afafaf",
                    gap: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div>
                    조회수 {+v.view_count > 999 ? "999+" : v.view_count}
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "1px",
                      backgroundColor: "#afafaf",
                    }}
                  />
                  <div>
                    댓글 {+v.comment_count > 999 ? "999+" : v.comment_count}
                  </div>
                  <div
                    style={{
                      height: "100%",
                      width: "1px",
                      backgroundColor: "#afafaf",
                    }}
                  />
                  <div>추천 {+v.like > 999 ? "999+" : v.like}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
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
      </div>
      <Footer />
    </div>
  );
};

export default Walk;
