import styles from "./header.module.scss";
import classNames from "classnames/bind";
import {
  IconSearchLight,
  IconFavoritesTransparent,
  IconNotify,
  LogoSpotify,
  IconArrowDown,
} from "~/compoments/assets/assets_helper";
import { useState, useRef } from "react";
const cx = classNames.bind(styles);
const listHeaderMenu = ["Music", "Podcast", "Radio", "Live"];
function Header() {
  const [menuActive, setMenuActive] = useState(null);
  const width = window.innerWidth;
  const searchRef = useRef(null);
  return (
    <div
      className={cx("header")}
      style={{
        position: "fixed",
        left: (width / 100) * 18,
      }}>
      <div className={cx("header_menu")}>
        {listHeaderMenu.map((menu, i) => {
          return (
            <div
              className={cx("menu_item", menuActive == i ? "active" : "")}
              key={i}
              onClick={() => {
                setMenuActive(i);
              }}>
              {menu}
            </div>
          );
        })}
      </div>
      <div className={cx("header_option")}>
        <div
          className={cx("block_search")}
          onClick={() => searchRef.current.focus()}>
          <input
            ref={searchRef}
            className={cx("search")}
            placeholder="Search..."></input>
          <div
            className={cx("icon_search")}
            onClick={(e) => {
              e.preventDefault();
            }}>
            <IconSearchLight />
          </div>
        </div>
        <div className={cx("block_icon")}>
          <div className={cx("icon_favorites")}>
            <IconFavoritesTransparent />
          </div>
          <div className={cx("icon_notify")}>
            <IconNotify />
          </div>
        </div>
        <div className={cx("block_user")}>
          <div className={cx("user_avatar")}>
            <img src={LogoSpotify}></img>
          </div>
          <div className={cx("user_name")}>
            <span>Van Tung</span>
          </div>
          <div className={cx("icon_arrow_down")}>
            <IconArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
