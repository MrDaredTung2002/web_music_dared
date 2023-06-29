import classNames from "classnames/bind";
import styles from "./discover.module.scss";
import React from "react";
import BlockBanner from "~/widgets/BlockBanner";
const cx = classNames.bind(styles);

function Discover() {
  return (
    <div className={cx("discover")}>
      <BlockBanner></BlockBanner>
      <div className={cx("block_top_artists")}>
        <div className={cx("title_top_artists")}>
          <div className={cx("name_top_artists")}>Top Artists</div>
          <div className={cx("more_top_artists")}>More list</div>
        </div>
        <div className={cx("list_top_artits")}>
          <div className={cx("item_artist")}>
            <img className={cx("image_artist")}></img>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
