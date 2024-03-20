import className from "classnames/bind";
import styles from "./WalkCreate.module.scss";
import { useState } from "react";
import { useLongPress } from "use-long-press";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const cx = className.bind(styles);

const WalkCreate = () => {
  const navigation = useNavigate();

  const onClickBackIcon = () => {
    navigation(-1);
  };

  const [commentId, setCommentId] = useState<any>("");
  const [isMine, setIsMine] = useState(false);
  const [commentisMine, setCommentIsMine] = useState(false);
  const [more, setMore] = useState(false);

  const [date, setDate] = useState(new Date());

  const bindPress = useLongPress((_e, v) => {
    const id = v.context;
    setCommentId(id);
  });

  const onClickEtcIcon = () => {
    setMore((prev) => !prev);
  };

  const [data] = useState([
    {
      nick_name: "룰라리",
      id: uuidv4(),
      content:
        "dawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwadadawdwadwada",
      src: "/images/icon/walk.png",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
    {
      nick_name: "dwadaw",
      id: uuidv4(),
      content: "dawdwadwada",
      src: "",
      view_count: "22222222",
      comment_count: "2222",
      like: "222",
      time: "10분전",
    },
  ]);

  return (
    <div className={cx("container")} onClick={() => setMore(false)}>
      <div className={cx("wrap")}>
        <div className={cx("handle_wrap")}>
          <img
            className={cx("down_img")}
            src="/images/icon/down.png"
            onClick={onClickBackIcon}
          />
        </div>
        <img src={`/images/icon/walk.png`} className={cx("walk_img")} />
      </div>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          backgroundColor: "#fff",
          gap: "12px",
          fontSize: "21px",
          fontWeight: "600",
        }}
      >
        <div>제목</div>
        <input />
        <div>내용</div>
        <textarea />
        <div className={cx("datePicker")}>
          <Calendar value={date}></Calendar>
        </div>
        <div className={cx("btn")}>
          <div>작성하기</div>
        </div>
      </div>
    </div>
  );
};

export default WalkCreate;
