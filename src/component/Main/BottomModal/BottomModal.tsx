import { motion, AnimatePresence } from "framer-motion";

type Props = {
  setBottomModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
};

export function BottomModal({ setBottomModalVisible, visible }: Props) {
  const ButtonStyle = {
    width: "100%",
    height: "calc(33% - 5px)",
    borderRadius: "8px",
    backgroundColor: "#d0c9c9",
    fontWeight: "400",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={() => setBottomModalVisible(false)}
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
            initial={{
              y: 20,
              height: visible ? "0" : "16%",
            }}
            animate={{
              y: 0,
              height: visible ? "16%" : "0",
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
            <motion.div
              whileHover={{
                backgroundColor: "#a97dff",
              }}
              style={ButtonStyle}
            >
              공유하기
            </motion.div>
            <motion.div
              whileHover={{
                backgroundColor: "#a97dff",
              }}
              style={ButtonStyle}
            >
              차단하기
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
