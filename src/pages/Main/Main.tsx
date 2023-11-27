import className from "classnames/bind";
import { Footer } from "component/Footer";
import { BottomModal, CommentModal } from "component/Main";
import { Side } from "component/Side";
import { useEffect, useRef, useState } from "react";
import styles from "./Main.module.scss";
import ReactPlayer from "react-player";
import { useLongPress } from "use-long-press";
import { useDoubleTap } from "use-double-tap";
import { FooterKind } from "@utils/types/footerKind";
import { v4 as uuidv4 } from "uuid";

const cx = className.bind(styles);

const Main = () => {
  const bindPress = useLongPress((e) => {
    setPress(!press);
  });

  const onClickHandle = () => {
    !press && setMute(!mute);
  };

  const onDoubleClickHandle = () => {
    setLike(!like);
  };

  const bindClick = useDoubleTap(
    (e) => {
      onDoubleClickHandle();
    },
    300,
    { onSingleTap: onClickHandle }
  );

  const [more, setMore] = useState(false);
  const [commentModalVisible, setCommentModalVisible] =
    useState<boolean>(false);
  const [bottomModalVisible, setBottomModalVisible] = useState<boolean>(false);
  const [mute, setMute] = useState(true);
  const [like, setLike] = useState(false);
  const [press, setPress] = useState(false);

  const [played, setPlayed] = useState(0);

  const handleProgress = (state: any) => {
    setPlayed(state.played);
  };

  const SideClickHandle = (kind: "like" | "comment" | "more") => {
    if (kind === "like") {
      setLike((prev) => !prev);
    }
  };
  const FooterHandle = (kind: FooterKind) => {
    console.log(kind);
  };

  const [data] = useState([
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
    { id: uuidv4() },
  ]);

  const [ableId, setAbleId] = useState<HTMLElement>();
  const [ableIndex, setAbleIndex] = useState(0);

  const videoWrapRef = useRef<HTMLDivElement>(null);

  const [fixedScrollPosition, setFixedScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // 스크롤 위치 감시
  useEffect(() => {
    const handleScroll = () => {
      if (videoWrapRef.current) {
        const currentScrollPosition = videoWrapRef.current.scrollTop;
        setScrollPosition(currentScrollPosition);
      }
    };

    if (videoWrapRef.current) {
      videoWrapRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (videoWrapRef.current) {
        videoWrapRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > fixedScrollPosition + 100) {
      setFixedScrollPosition((prev) => prev + window.innerHeight);
      const targetElement = document.getElementById(data[ableIndex + 1]?.id);
      setAbleIndex((prev) => prev + 1);
      if (targetElement) {
        setAbleId(targetElement);
        if (targetElement) {
          targetElement.focus();
        }
      }
    }
    if (scrollPosition < fixedScrollPosition - 100) {
      setFixedScrollPosition((prev) => prev - window.innerHeight);
      const targetElement = document.getElementById(data[ableIndex - 1]?.id);
      setAbleIndex((prev) => prev - 1);
      if (targetElement) {
        setAbleId(targetElement);
        if (targetElement) {
          targetElement.focus();
        }
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    const targetElement = document.getElementById(data[ableIndex].id);
    if (targetElement) {
      setAbleId(targetElement);
      if (targetElement) {
        targetElement.focus();
      }
    }
  }, [ableId]);

  const [moreComment, setMoreComment] = useState(false);

  return (
    <div className={cx("container")}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
          maxWidth: "500px",
        }}
        ref={videoWrapRef}
      >
        {data.map((v, idx) => (
          <div
            {...bindClick}
            className={cx("video_wrap")}
            id={v?.id}
            tabIndex={idx}
          >
            <ReactPlayer
              url={"https://youtu.be/Tqsz8nwsGU4"}
              width="auto"
              height="100%"
              playing
              muted={mute}
              loop
              onProgress={handleProgress}
              controls={false}
            />
            <div {...bindPress()} className={cx("wrap")} />
            <div
              style={{
                position: "absolute",
                bottom: "85px",
                color: "#fff",
                zIndex: 3,
                width: "100%",
                padding: "30px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "18px",
                  alignItems: "center",
                  gap: "7px",
                  marginBottom: "10px",
                }}
              >
                <img src="/images/icon/profile.png" style={{ width: "37px" }} />
                <div style={{ marginTop: "5px" }}>아이디</div>
              </div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  whiteSpace: moreComment ? "unset" : "nowrap",
                  textOverflow: "ellipsis",
                  overflow: moreComment ? "scroll" : "hidden",
                  opacity: 0.7,
                  width: "calc(100% - 23%)",
                  cursor: "pointer",
                  maxHeight: "30vh",
                  paddingTop: "10px",
                }}
                onClick={() => setMoreComment((prev) => !prev)}
              >
                코멘트코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트코멘트코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트코멘트코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트코멘트 코멘트 코멘트코멘트코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트코멘트코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트 코멘트
                코멘트
              </div>
            </div>
            <Side like={like} clickHandle={SideClickHandle} />
          </div>
        ))}
      </div>
      {commentModalVisible && (
        <CommentModal setCommentModalVisible={setCommentModalVisible} />
      )}
      <Footer played={played} FooterHandle={FooterHandle} />
    </div>
  );
};

export default Main;
