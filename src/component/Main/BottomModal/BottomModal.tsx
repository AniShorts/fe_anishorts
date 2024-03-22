import { motion, AnimatePresence } from "framer-motion";

type Props = {
  modalHandle: (type: "bottom", visible: boolean) => void;
  visible: boolean;
  sharedVisible: boolean;
  isMine?: boolean;
  isFixed?: boolean;
};

export function BottomModal({
  modalHandle,
  visible,
  sharedVisible,
  isMine,
  isFixed,
}: Props) {
  const ButtonStyle = {
    width: "100%",
    height: "calc(33% - 5px)",
    borderRadius: "8px",
    backgroundColor: "#c6b0f4",
    fontWeight: "400",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
    padding: "10px 0",
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={() => modalHandle("bottom", false)}
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
            height: "100%",
            zIndex: 3,
          }}
        >
          <motion.div
            initial={{
              y: 20,
              height: visible ? "0" : "auto",
            }}
            animate={{
              y: 0,
              height: visible ? "auto" : "0",
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            style={{
              borderRadius: "15px 15px 0 0",
              padding: "16px",
              overflow: "hidden",
              position: "absolute",
              bottom: "95px",
              width: "100%",
              backgroundColor: "#ffffff",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "16px",
              gap: "8px",
            }}
          >
            {sharedVisible && (
              <motion.div
                whileHover={{
                  backgroundColor: "#a97dff",
                }}
                style={ButtonStyle}
              >
                공유하기
              </motion.div>
            )}
            {isFixed && (
              <motion.div
                whileHover={{
                  backgroundColor: "#a97dff",
                }}
                style={ButtonStyle}
              >
                수정하기
              </motion.div>
            )}
            <motion.div
              whileHover={{
                backgroundColor: "#a97dff",
              }}
              style={ButtonStyle}
            >
              {isMine ? "삭제하기" : "신고하기"}
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "#a97dff",
              }}
              style={ButtonStyle}
            >
              닫기
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
