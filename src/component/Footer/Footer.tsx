import className from "classnames/bind";
import styles from "./Footer.module.scss";
import { AiFillHome } from "react-icons/ai";
import { GiSittingDog } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";

const cx = className.bind(styles);

export function Footer() {
  return (
    <div className={cx("container")}>
      <AiFillHome />
      <GiSittingDog />
      <BiPlusMedical />
      <RiSearchLine />
      <GoThreeBars />
    </div>
  );
}