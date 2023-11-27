import { motion, AnimatePresence } from "framer-motion";

type Props = {
  setCommentModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
};

export function CommentModal({ setCommentModalVisible, visible }: Props) {
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
            borderRadius: "15px",
            margin: "16px 0",
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
              borderRadius: "15px",
              padding: "16px",
              margin: "16px 0",
              overflow: "hidden",
              position: "absolute",
              bottom: "0",
              width: "100%",
              backgroundColor: "#ffffff",
              zIndex: 3,
            }}
          >
            dwadaw
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
