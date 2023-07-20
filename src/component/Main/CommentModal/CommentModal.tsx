import className from "classnames/bind";
import styles from "./CommentModal.module.scss";
const cx = className.bind(styles);

type Props = {
  setCommentModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function CommentModal({ setCommentModalVisible }: Props) {
  return (
    <div
      onClick={() => setCommentModalVisible(false)}
      className={cx("container")}
    >
      <div onClick={(e) => e.stopPropagation()} className={cx("wrap")}>
        dd
      </div>
    </div>
  );
}
