import className from "classnames/bind";
import styles from "../.././pages/My/MyPage.module.scss"

type props = {
  info : string;
  number : number;
}
const cx = className.bind(styles);
const UserInformation = (props : props) => {
  return (
    <div className={cx("userInformation")}>
        <p>{props.number}</p>
        <p>{props.info}</p>
    </div>
  )
}

export default UserInformation