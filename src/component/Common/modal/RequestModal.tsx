import className from "classnames/bind";
import styles from "./RequestModal.module.scss";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { errorTextState } from "recoil/atom";

const cx = className.bind(styles);

type Props = {
  title: string;
  isError?: boolean;
};

const RequestModal = ({ title, isError }: Props) => {
  const [_, setErrorText] = useRecoilState(errorTextState);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("wrap")} onClick={(e) => e.stopPropagation()}>
        <div className={cx("title")}>{title}</div>
        <button
          className={cx(!isError ? "button" : "errorButton")}
          onClick={() => setErrorText("")}
        >
          확인
        </button>
      </div>
    </div>
  );
};
export default RequestModal;
