import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import { DetailModal } from "../DetailModal/DetailModal";

type Props = {
  setCommentModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  detailModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CommentModal({
  setCommentModalVisible,
  visible,
  detailModalVisible,
}: Props) {
  const bindPress = useLongPress((e) => {
    e.stopPropagation();
    detailModalVisible((prev) => !prev);
  });

  const [data] = useState([
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
    {
      id: "1",
      nick_name: "dwadwadwadwad",
      comment: "dwadwadawdwadwadwakjhdkwajdwa",
      url: "",
    },
  ]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={() => setCommentModalVisible(false)}
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
              overflow: "scroll",
            }}
          >
            {data.map((v) => (
              <motion.div
                {...bindPress()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  padding: "15px 10px",
                }}
                whileTap={{ backgroundColor: "#3333334a" }}
              >
                <img
                  style={{ width: "40px", cursor: "pointer" }}
                  src={v.url ? v.url : `/images/icon/profile.png`}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontWeight: "700", cursor: "pointer" }}>
                    {v.nick_name}
                  </div>
                  <div style={{ fontWeight: "500" }}>{v.comment}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
