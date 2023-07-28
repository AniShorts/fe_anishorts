import className from "classnames/bind";
import { Footer } from "component/Footer";
import { BottomModal, CommentModal } from "component/Main";
import { Side } from "component/Side";
import { useState } from "react";
import styles from "./Main.module.scss";
import ReactPlayer from "react-player";
import { useLongPress } from "use-long-press";
import { useDoubleTap } from "use-double-tap";

const cx = className.bind(styles);

const Main = () => {
  const bindPress = useLongPress((e) => {
    setPress(!press);
  });

  const onClickHandle = () => {
    !press && setMute(!mute);
  };

  const onDoubleClickHandle = () => {
    setLike(!like);
  };

  const bindClick = useDoubleTap(
    (e) => {
      onDoubleClickHandle();
    },
    300,
    { onSingleTap: onClickHandle }
  );

  const [more, setMore] = useState(false);
  const [commentModalVisible, setCommentModalVisible] =
    useState<boolean>(false);
  const [bottomModalVisible, setBottomModalVisible] = useState<boolean>(false);
  const [mute, setMute] = useState(true);
  const [like, setLike] = useState(false);
  const [press, setPress] = useState(false);

  return (
    <div className={cx("container")}>
      <div {...bindClick} className={cx("video_wrap")}>
        <ReactPlayer
          url={"https://youtu.be/Tqsz8nwsGU4"}
          width="auto"
          height="calc(100vh - 60px)"
          playing
          muted={mute}
          loop
        />
        <div {...bindPress()} className={cx("wrap")} />
      </div>
      <Side
        setCommentModalVisible={setCommentModalVisible}
        like={like}
        setLike={setLike}
      />
      {commentModalVisible && (
        <CommentModal setCommentModalVisible={setCommentModalVisible} />
      )}
      <Footer />
    </div>
  );
};

export default Main;
