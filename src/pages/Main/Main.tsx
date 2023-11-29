import className from "classnames/bind";
import { Footer } from "component/Footer";
import { BottomModal, CommentModal, Side } from "component/Main";
import { useEffect, useRef, useState } from "react";
import styles from "./Main.module.scss";
import ReactPlayer from "react-player";
import { useLongPress } from "use-long-press";
import { useDoubleTap } from "use-double-tap";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { DetailModal } from "component/Main/DetailModal/DetailModal";

type Data = {
  id: string;
  like: boolean;
};

const cx = className.bind(styles);

const Main = () => {
  const [mute, setMute] = useState(true);
  const [press, setPress] = useState(false);
  const [played, setPlayed] = useState(0);

  const [moreComment, setMoreComment] = useState(false);
  const [datailModalVisible, setDetailModalVisible] = useState(false);
  const [commentModalVisible, setCommentModalVisible] =
    useState<boolean>(false);
  const [bottomModalVisible, setBottomModalVisible] = useState<boolean>(false);

  const bindPress = useLongPress(() => {
    setPress(!press);
  });

  const onClickHandle = () => {
    !press && setMute(!mute);
  };

  const onDoubleClickHandle = () => {
    setData((prev) => {
      return prev.map((v) => {
        if (v.id === ableId?.id) {
          return {
            ...v,
            like: !v.like,
          };
        } else {
          return v;
        }
      });
    });
  };

  const bindClick = useDoubleTap(
    () => {
      onDoubleClickHandle();
    },
    300,
    { onSingleTap: onClickHandle }
  );

  const handleProgress = (state: any) => {
    setPlayed(state.played);
  };

  const SideClickHandle = (kind: "like" | "comment" | "bottom") => {
    if (kind === "like") {
      setData((prev) => {
        return prev.map((v) => {
          if (v.id === ableId?.id) {
            return {
              ...v,
              like: !v.like,
            };
          } else {
            return v;
          }
        });
      });
    } else if (kind === "bottom") {
      setBottomModalVisible((prev) => !prev);
    } else {
      setCommentModalVisible((prev) => !prev);
    }
  };

  const modalHandle = (
    kind: "comment" | "bottom" | "detail",
    visible: boolean
  ) => {
    if (kind === "comment") {
      setCommentModalVisible(visible);
    } else if (kind === "bottom") {
      setBottomModalVisible(visible);
    } else if (kind === "detail") {
      setDetailModalVisible(visible);
    } else {
      setMoreComment(visible);
    }
  };

  const [data, setData] = useState<Data[]>([
    { id: uuidv4(), like: true },
    { id: uuidv4(), like: false },
    { id: uuidv4(), like: false },
    { id: uuidv4(), like: false },
    { id: uuidv4(), like: false },
    { id: uuidv4(), like: false },
  ]);

  // 스크롤 관련
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
    setMoreComment(false);
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
      {datailModalVisible && (
        <DetailModal modalHandle={modalHandle} kind="delete" />
      )}
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
                  height: moreComment && v.id === ableId?.id ? "100px" : "30px",
                  whiteSpace:
                    moreComment && v.id === ableId?.id ? "unset" : "nowrap",
                  overflow:
                    moreComment && v.id === ableId?.id ? "scroll" : "hidden",
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
            <Side like={v.like} clickHandle={SideClickHandle} />
          </div>
        ))}
      </div>
      <CommentModal visible={commentModalVisible} modalHandle={modalHandle} />
      <BottomModal modalHandle={modalHandle} visible={bottomModalVisible} />
      <Footer played={played} />
    </div>
  );
};

export default Main;
