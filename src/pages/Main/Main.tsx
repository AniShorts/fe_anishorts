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
import { motion, AnimatePresence } from "framer-motion";
import { DetailModal } from "component/Main/DetailModal/DetailModal";

const cx = className.bind(styles);

const Main = () => {
  const bindPress = useLongPress(() => {
    setPress(!press);
  });

  const onClickHandle = () => {
    !press && setMute(!mute);
  };

  const onDoubleClickHandle = () => {
    setLike(!like);
  };

  const bindClick = useDoubleTap(
    () => {
      onDoubleClickHandle();
    },
    300,
    { onSingleTap: onClickHandle }
  );

  const [moreComment, setMoreComment] = useState(false);
  const [datailModalVisible, detailModalVisible] = useState(false);
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
    } else if (kind === "comment") {
      setCommentModalVisible((prev) => !prev);
    } else {
      setBottomModalVisible((prev) => !prev);
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

  return (
    <div className={cx("container")}>
      {datailModalVisible && <DetailModal />}
      <div className={cx("video_container")} ref={videoWrapRef}>
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
            <div className={cx("profile")} onClick={(e) => e.stopPropagation()}>
              <div className={cx("my_info")}>
                <img src="/images/icon/profile.png" />
                <div>아이디</div>
              </div>
              <motion.div
                style={{
                  fontWeight: "600",
                  fontSize: "16px",
                  textOverflow: "ellipsis",
                  width: "calc(100% - 23%)",
                  cursor: "pointer",
                  maxHeight: "30vh",
                  paddingTop: "10px",
                  color: "#eee9e9",
                  transition: "height 0.3s",
                }}
                onClick={() => setMoreComment((prev) => !prev)}
                animate={{
                  height: moreComment ? 100 : 30,
                  whiteSpace: moreComment ? "unset" : "nowrap",
                  overflow: moreComment ? "scroll" : "hidden",
                }}
                transition={{ duration: 0.1 }}
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
              </motion.div>
            </div>
            <Side like={like} clickHandle={SideClickHandle} />
          </div>
        ))}
      </div>
      <CommentModal
        visible={commentModalVisible}
        setCommentModalVisible={setCommentModalVisible}
        detailModalVisible={detailModalVisible}
      />
      <BottomModal
        setBottomModalVisible={setBottomModalVisible}
        visible={bottomModalVisible}
      />
      <Footer played={played} FooterHandle={FooterHandle} />
    </div>
  );
};

export default Main;
