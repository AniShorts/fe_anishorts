import {
  motion,
  AnimatePresence,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { useState } from "react";
import { useLongPress } from "use-long-press";

type Props = {
  visible: boolean;
  modalHandle: (type: "comment" | "detail", visible: boolean) => void;
};

export function CommentModal({ visible, modalHandle }: Props) {
  const bindPress = useLongPress((e) => {
    e.stopPropagation();
    modalHandle("detail", true);
  });

  const dragControls = useDragControls();
  const y = useMotionValue(0);

  const handleDrag = (
    _e: MouseEvent,
    info: { point: { x: number; y: number } }
  ) => {
    if (Math.abs(info.point.y) > 500) {
      modalHandle("comment", false);
    }
  };

  const [data] = useState([
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment:
        "dwadwadawdwadwadwakjhdkwajdwadwadwadawdwadwadwakjhdkwajdwadwadwadawdwadwadwakjhdkwajdwadwadwadawdwadwadwakjhdkwajdwadwadwadawdwadwadwakjhdkwajdwadwadwadawdwadwadwakjhdkwajdwadwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
      time: "10분전",
    },
  ]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={() => modalHandle("comment", false)}
          initial={{
            opacity: visible ? 0 : 1,
            y: 20,
          }}
          animate={{
            opacity: visible ? 1 : 0,
            y: 0,
          }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          style={{
            overflow: "hidden",
            position: "absolute",
            bottom: "0",
            width: "100%",
            backgroundColor: "#33333375",
            zIndex: 3,
            height: "100%",
          }}
        >
          <motion.div
            dragControls={dragControls}
            onClick={(e) => e.stopPropagation()}
            initial={{
              y: 20,
              height: visible ? "0" : "80%",
            }}
            animate={{
              y: 0,
              height: visible ? "80%" : "0",
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            style={{
              borderRadius: "15px 15px 0 0 ",
              paddingTop: "46px ",
              position: "absolute",
              bottom: "95px",
              width: "100%",
              backgroundColor: "#ffffff",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
            }}
            onDrag={handleDrag}
          >
            <div style={{ overflow: "scroll" }}>
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
                    style={{ height: "30px", cursor: "pointer" }}
                    src={v.url ? v.url : "/images/icon/profile.png"}
                  />
                  <div
                    style={{
                      margin: "auto 20px auto 10px",
                      fontWeight: "600",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      width: "calc(100% - 60px)",
                      wordBreak: "break-all",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ cursor: "pointer" }}>{v.nick_name}</div>
                      <div style={{ color: "#999494", fontSize: "13px" }}>
                        {v.time}
                      </div>
                    </div>
                    <div>{v.comment}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div
              style={{
                height: "30px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "20px 10px",
                borderTop: "solid 1px #d0d0d0",
              }}
            >
              <motion.input
                placeholder="Comment ..."
                style={{
                  width: "calc(100% - 40px)",
                  borderRadius: "7px",
                  border: "solid 1px #d3c0f8",
                  outline: "none",
                  padding: "5px 10px",
                }}
                whileHover={{ border: "solid 1px #a97dff" }}
              />
              <motion.div
                style={{
                  width: "100px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                  backgroundColor: "#a97dff",
                  fontSize: "14px",
                  color: "#fff",
                  cursor: "pointer",
                }}
                whileHover={{ backgroundColor: "#c8affa" }}
              >
                댓글 달기
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
