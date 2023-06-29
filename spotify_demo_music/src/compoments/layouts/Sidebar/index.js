import { LogoSpotify } from "~/compoments/assets/assets_helper";
import styles from "./sideBar.module.scss";
import classNames from "classnames/bind";
import {
  IconHome,
  IconHomeActive,
  IconExplorer,
  IconExplorerActive,
  IconSearch,
  IconSearchActive,
  IconMusic,
  IconMusicActive,
  IconAlbums,
  IconAlbumsActive,
  IconArtists,
  IconArtistsActive,
  IconCover,
  IconCoverActive,
  IconFavorites,
  IconFavoritesActive,
  IconShared,
  IconSharedActive,
  IconDownload,
  IconDownloadActive,
  IconSetting,
  IconSettingActive,
  IconLogout,
  IconLogoutActive,
} from "~/compoments/assets/assets_helper";
import { useState } from "react";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const dataListMenu = [
  {
    title: "Menu",
    listItem: [
      {
        name: "Discover",
        icon: IconHome,
        iconActive: IconHomeActive,
      },
      {
        name: "Explorer",
        icon: IconExplorer,
        iconActive: IconExplorerActive,
      },
      {
        name: "Search",
        icon: IconSearch,
        iconActive: IconSearchActive,
      },
    ],
  },
  {
    title: "Library",
    listItem: [
      {
        name: "My Music",
        icon: IconMusic,
        iconActive: IconMusicActive,
      },
      {
        name: "Albums",
        icon: IconAlbums,
        iconActive: IconAlbumsActive,
      },
      {
        name: "Artists",
        icon: IconArtists,
        iconActive: IconArtistsActive,
      },
    ],
  },
  {
    title: "Playlist",
    listItem: [
      {
        name: "Cover",
        icon: IconCover,
        iconActive: IconCoverActive,
      },
      {
        name: "Favorites",
        icon: IconFavorites,
        iconActive: IconFavoritesActive,
      },
      {
        name: "Shared",
        icon: IconShared,
        iconActive: IconSharedActive,
      },
      {
        name: "Downloads",
        icon: IconDownload,
        iconActive: IconDownloadActive,
      },
    ],
  },
  {
    title: "Others",
    listItem: [
      {
        name: "Settings",
        icon: IconSetting,
        iconActive: IconSettingActive,
      },
      {
        name: "Logout",
        icon: IconLogout,
        iconActive: IconLogoutActive,
      },
    ],
  },
];
function SideBar() {
  const [menuActive, setMenuActive] = useState(4);
  return (
    <div className={cx("sidebar")}>
      <div className={cx("img_logo")}>
        <img className={cx("img_logo_spotify")} src={LogoSpotify}></img>
      </div>
      <div className={cx("list_menu")}>
        {dataListMenu.map((list, index) => {
          return (
            <div className={cx("block_menu")} key={index}>
              <div className={cx("title_menu")}>{list.title}</div>

              {list.listItem.map((item, index2) => {
                var Icon = item.icon;
                var i = index + dataListMenu.length * (index2 + 1);
                var link =
                  item.name == "Discover" ? "" : item.name.toLowerCase();
                return (
                  <Link
                    to={"/" + link}
                    className={cx("item_menu", menuActive == i ? "active" : "")}
                    onClick={() => {
                      setMenuActive(i);
                    }}
                    key={i}>
                    <div className={cx("item_icon")}>
                      <Icon />
                    </div>
                    <div className={cx("item_name")}>{item.name}</div>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
