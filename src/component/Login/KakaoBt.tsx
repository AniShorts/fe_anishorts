import className from "classnames/bind";
import styles from "../../pages/Login/Intro.module.scss"
import { RiKakaoTalkFill } from 'react-icons/ri';

const KakaoBt = (props : {name : string} ) => {
    const cx = className.bind(styles);
  return (
    <div className={cx('kakao-bt')}>
        <p><RiKakaoTalkFill/></p>
        <p>{props.name}</p>
    </div>
  )
}

export default KakaoBt