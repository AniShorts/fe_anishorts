import className from "classnames/bind";
import styles from "../../pages/Login/Introduce.module.scss"

const Dash = (props : {title : string} ) => {
    const cx = className.bind(styles);
  return (
    <div className={cx('line')}>{props.title}</div>
  )
}

export default Dash