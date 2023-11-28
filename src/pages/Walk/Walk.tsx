import className from "classnames/bind";
import styles from "./Walk.module.scss";
import { Footer } from "component/Footer";
import { useState } from "react";

const cx = className.bind(styles);

const Walk = () => {
  const [data, setData] = useState([
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "/images/icon/more.png",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
    },
    {
      title: "dwadaw",
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
          }}
        >
          <div>POST</div>
          <div style={{ display: "flex" }}>
            <div>최신순</div>
            <img src="/images/icon/down.png" />
          </div>
        </div>
        <div
          style={{
            height: "calc(100% - 371px)",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            paddingTop: "2px",
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
              {v.src && <img style={{ height: "100%" }} src={v.src} />}
              <div>
                <div>{v.title}</div>
                <div>{v.content}</div>
                <div style={{ display: "flex" }}>
                  <div>{v.view_count}</div>
                  <div>{v.comment_count}</div>
                  <div>{v.like}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer clickHandle={() => ""} />
    </div>
  );
};

export default Walk;
