import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./blockbanner.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);
const dots = ["", "", "", ""];
function BlockBanner() {
  const [banner, setBanner] = useState(0);
  const handleSelectDot = (i) => {
    setBanner(i);
  };
  return (
    <div className={cx("block_banner")}>
      <div className={cx("banner")}>
        <div className={cx("banner_content")}>
          <div className={cx("name_banner")}>our features</div>
          <div className={cx("title_banner")}>
            get premium access & Unlock All Popular Songs
          </div>
          <div className={cx("block_button")}>
            <button className={cx("btn button_getting")}>Getting Now</button>
            <Link>1 month free trial</Link>
          </div>
        </div>
      </div>
      <div className={cx("banner_dots")}>
        {dots.map((dot, i) => {
          return (
            <div
              className={cx("dot", banner == i ? "active" : "")}
              key={i}
              onClick={() => handleSelectDot(i)}></div>
          );
        })}
      </div>
    </div>
  );
}

export default BlockBanner;
