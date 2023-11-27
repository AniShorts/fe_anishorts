import className from "classnames/bind";
import styles from "./DetailModal.module.scss";

const cx = className.bind(styles);

type Props = {};

export function DetailModal({}: Props) {
  return (
    <div className={cx("container")}>
      <div className={cx("wrap")}>내꺼면 삭제 아니면 신고</div>
    </div>
  );
}
