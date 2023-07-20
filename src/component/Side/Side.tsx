import className from "classnames/bind";
import styles from "./Side.module.scss";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { MdModeComment } from "react-icons/md";
import { Dispatch, SetStateAction, useState } from "react";

const cx = className.bind(styles);

type Props = {
  like: boolean;
  setCommentModalVisible: Dispatch<SetStateAction<boolean>>;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Side({ like, setCommentModalVisible, setLike }: Props) {
  return (
    <div className={cx("container")}>
      <div className={cx("wrap")}>
        {like ? (
          <BsHandThumbsUpFill
            style={{ color: "purple" }}
            onClick={() => setLike(!like)}
          />
        ) : (
          <BsHandThumbsUp onClick={() => setLike(!like)} />
        )}
        <MdModeComment onClick={() => setCommentModalVisible(true)} />
      </div>
    </div>
  );
}
