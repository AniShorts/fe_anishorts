import className from "classnames/bind";
import styles from "./DetailModal.module.scss";

const cx = className.bind(styles);

type Props = {
  modalHandle: (type: "detail", visible: boolean) => void;
};

export function DetailModal({ modalHandle }: Props) {
  const onClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    modalHandle("detail", false);
  };
  return (
    <div className={cx("container")} onClick={onClickHandle}>
      <div className={cx("wrap")}>내꺼면 삭제 아니면 신고</div>
    </div>
  );
}
