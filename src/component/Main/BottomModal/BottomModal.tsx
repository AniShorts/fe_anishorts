import className from "classnames/bind";
import styles from "./BottomModal.module.scss";
const cx = className.bind(styles);

export function BottomModal() {
  return <div className={cx("container")}></div>;
}
