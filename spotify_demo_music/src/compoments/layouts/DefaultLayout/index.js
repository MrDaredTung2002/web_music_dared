import SideBar from "~/compoments/layouts/Sidebar";
import Header from "~/compoments/layouts/Header";
import Playlist from "~/compoments/layouts/Playlist";
import styles from "./defaultLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <div className={cx("main")} style={{ position: "relative" }}>
      <div className={cx("sidebar")} style={{ width: (width / 100) * 18 }}>
        <SideBar></SideBar>
      </div>
      <div
        className={cx("container")}
        style={{
          position: "absolute",
          left: (width / 100) * 18,
          minHeight: height + 100,
          width: width - (width / 100) * 18 - 6,
        }}>
        <Header></Header>
        <div
          style={{ width: (width / 100) * 18 - 400 }}
          className={cx("children")}>
          {children}
        </div>
        <Playlist></Playlist>
      </div>
    </div>
  );
}

export default DefaultLayout;
