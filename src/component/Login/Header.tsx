import className from "classnames/bind";
import styles from "../../pages/Login/Intro.module.scss"
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = (props : {title : string}) => {
  const navigate = useNavigate();
  const cx = className.bind(styles);

  return (
    <div className={cx('header')}>
        <p onClick={()=> {navigate(-1)}}><MdArrowBackIosNew /></p>
        <p>{props.title}</p>
    </div>
  )
}

export default Header