import className from "classnames/bind";
import styles from "./DetailModal.module.scss";

const cx = className.bind(styles);

type Props = {
  kind: "delete" | "report";
  modalHandle: (
    type: "detail",
    visible: boolean,
    kind?: "delete" | "report"
  ) => void;
};

export function DetailModal({ kind, modalHandle }: Props) {
  const onCloseHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    modalHandle("detail", false);
  };

  const onClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    modalHandle("detail", false, kind);
  };

  return (
    <div className={cx("container")} onClick={onCloseHandle}>
      <div onClick={onClickHandle} className={cx("wrap")}>
        {kind === "delete" ? "삭제하기" : "신고하기"}
      </div>
    </div>
  );
}
