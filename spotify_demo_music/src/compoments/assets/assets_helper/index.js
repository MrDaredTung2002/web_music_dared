import { ReactComponent as IconHome } from "~/statics/images/svg/icon_home.svg";
import { ReactComponent as IconHomeActive } from "~/statics/images/svg/icon_home_active.svg";
import { ReactComponent as IconExplorer } from "~/statics/images/svg/icon_explorer.svg";
import { ReactComponent as IconExplorerActive } from "~/statics/images/svg/icon_explorer_active.svg";
import { ReactComponent as IconSearch } from "~/statics/images/svg/icon_search.svg";
import { ReactComponent as IconSearchActive } from "~/statics/images/svg/icon_search_active.svg";
import { ReactComponent as IconMusic } from "~/statics/images/svg/icon_music.svg";
import { ReactComponent as IconMusicActive } from "~/statics/images/svg/icon_music_active.svg";
import { ReactComponent as IconAlbums } from "~/statics/images/svg/icon_albums.svg";
import { ReactComponent as IconAlbumsActive } from "~/statics/images/svg/icon_albums_active.svg";
import { ReactComponent as IconArtists } from "~/statics/images/svg/icon_artists.svg";
import { ReactComponent as IconArtistsActive } from "~/statics/images/svg/icon_artists_active.svg";
import { ReactComponent as IconCover } from "~/statics/images/svg/icon_cover.svg";
import { ReactComponent as IconCoverActive } from "~/statics/images/svg/icon_cover_active.svg";
import { ReactComponent as IconFavorites } from "~/statics/images/svg/icon_favorites.svg";
import { ReactComponent as IconFavoritesActive } from "~/statics/images/svg/icon_favorites_active.svg";
import { ReactComponent as IconShared } from "~/statics/images/svg/icon_shared.svg";
import { ReactComponent as IconSharedActive } from "~/statics/images/svg/icon_shared_active.svg";
import { ReactComponent as IconDownload } from "~/statics/images/svg/icon_download.svg";
import { ReactComponent as IconDownloadActive } from "~/statics/images/svg/icon_download_active.svg";
import { ReactComponent as IconSetting } from "~/statics/images/svg/icon_setting.svg";
import { ReactComponent as IconSettingActive } from "~/statics/images/svg/icon_setting_active.svg";
import { ReactComponent as IconLogout } from "~/statics/images/svg/icon_logout.svg";
import { ReactComponent as IconLogoutActive } from "~/statics/images/svg/icon_logout_active.svg";
import { ReactComponent as IconSearchLight } from "~/statics/images/svg/icon_search_light.svg";
import { ReactComponent as IconIdotMore } from "~/statics/images/svg/icon_idot_more.svg";

import { ReactComponent as IconFavoritesTransparent } from "~/statics/images/svg/icon_favorites_transparent.svg";
import { ReactComponent as IconNotify } from "~/statics/images/svg/icon_notify.svg";
import { ReactComponent as IconArrowDown } from "~/statics/images/svg/icon_arrow_down.svg";

import { ReactComponent as IconPreSong } from "~/statics/images/svg/icon_pre_songs.svg";
import { ReactComponent as IconNextSong } from "~/statics/images/svg/icon_next_songs.svg";
import { ReactComponent as IconArrowUp } from "~/statics/images/svg/icon_arrow_up.svg";

import LogoSpotify from "~/statics/images/png/logo_spotify.png";
import ImagePlaying from "~/statics/images/png/image_playing.jpg";

import Song1 from "../../../statics/musics/anh_khong_buon_nhu_em_nghi__kis.mp3";
import Song2 from "../../../statics/musics/Bật Tình Yêu Lên - Tăng Duy Tân, Hòa Minzy.mp3";
import Song3 from "../../../statics/musics/Chết trong em - Thịnh Suy.mp3";
import Song4 from "../../../statics/musics/MAKING MY WAY.mp3";
import Song5 from "../../../statics/musics/Thêm Bao Nhiêu Lâu - Đạt G.mp3";
import Song6 from "../../../statics/musics/•GLIMPSE OF US x PLUTO PROJECTOR•.mp3";
import Song7 from "../../../statics/musics/pluto projector guitar.mp3";

import Image1 from "~/statics/images/png/anh không buồn như em nghĩ.jpg";
import Image2 from "~/statics/images/png/Bật Tình Yêu Lên.jpg";
import Image3 from "~/statics/images/png/Chết Trong Em.jpg";
import Image4 from "~/statics/images/png/MAKING MY WAY.jpg";
import Image5 from "~/statics/images/png/image_playing.jpg";
import Image6 from "~/statics/images/png/Glimpse of us x Pluto projector.jpg";

const songs = [
  {
    name: "Anh không buồn như em nghĩ",
    artists: "kis",
    src: Song1,
    thumbnail: Image1,
  },
  {
    name: "Bật Tình Yêu Lên",
    artists: "Tăng Duy Tân, Hòa Minzy",
    src: Song2,
    thumbnail: Image2,
  },
  {
    name: "Chết trong em",
    artists: "Thịnh Suy",
    src: Song3,
    thumbnail: Image3,
  },
  {
    name: "MAKING MY WAY",
    artists: "Sơn Tùng MTP",
    src: Song4,
    thumbnail: Image4,
  },
  {
    name: "Thêm Bao Nhiêu Lâu",
    artists: "Đạt G",
    src: Song5,
    thumbnail: Image5,
  },
  {
    name: "GLIMPSE OF US x PLUTO PROJECTOR",
    artists: "Nothing",
    src: Song6,
    thumbnail: Image6,
  },
  {
    name: "pluto projector guitar",
    artists: "Nothing",
    src: Song7,
    thumbnail: Image6,
  },
];

function IconRandomSongs({ color: color }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.44898 15.3021C4.17493 15.3021 5.55102 14.5012 6.57726 12.8993C6.57726 12.7869 6.51895 12.6885 6.40233 12.6042L5.73761 11.0023C5.4344 11.7611 4.98542 12.3724 4.39067 12.8361C3.79592 13.2998 3.14869 13.5316 2.44898 13.5316H0.734694C0.548105 13.5316 0.379009 13.623 0.227405 13.8056C0.0758017 13.9883 0 14.192 0 14.4169C0 14.6417 0.0758017 14.8454 0.227405 15.0281C0.379009 15.2108 0.548105 15.3021 0.734694 15.3021H2.44898ZM15.4636 0.295082C15.0904 -0.0983606 14.7405 -0.0983606 14.414 0.295082C14.0641 0.716628 14.0641 1.13817 14.414 1.55972L15.3586 2.74005H12.4548C10.7522 2.74005 9.38776 3.54098 8.36152 5.14286C8.36152 5.22717 8.40816 5.32553 8.50146 5.43794L9.16618 7.03981C9.46939 6.28103 9.91837 5.66979 10.5131 5.20609C11.1079 4.74239 11.7551 4.51054 12.4548 4.51054H15.3586L14.414 5.69087C14.0641 6.11241 14.0641 6.53396 14.414 6.9555C14.5539 7.12412 14.7289 7.20843 14.9388 7.20843C15.102 7.20843 15.277 7.12412 15.4636 6.9555L17.7026 4.25761C18.0058 3.83607 18.0058 3.41452 17.7026 2.99297L15.4636 0.295082ZM15.4636 11.0867C15.0904 10.6932 14.7405 10.6932 14.414 11.0867C14.0641 11.5082 14.0641 11.9297 14.414 12.3513L15.3586 13.5316H12.4548C11.7551 13.5316 11.102 13.2998 10.4956 12.8361C9.88921 12.3724 9.42274 11.7611 9.09621 11.0023L8.29155 9.02108L7.4519 7.03981L7.10204 6.23888C6.68222 5.17096 6.05248 4.32084 5.21283 3.68852C4.37318 3.05621 3.4519 2.74005 2.44898 2.74005H0.734694C0.548105 2.74005 0.379009 2.83138 0.227405 3.01405C0.0758017 3.19672 0 3.40047 0 3.62529C0 3.85012 0.0758017 4.05386 0.227405 4.23653C0.379009 4.4192 0.548105 4.51054 0.734694 4.51054H2.44898C3.94169 4.51054 5.06122 5.35363 5.80758 7.03981L6.64723 9.02108L7.4519 11.0023L7.83673 11.8033C8.30321 12.8712 8.95044 13.7213 9.77843 14.3536C10.6064 14.9859 11.5219 15.3021 12.5248 15.3021H15.4636L14.484 16.4824C14.1341 16.904 14.1341 17.3255 14.484 17.7471C14.6239 17.9157 14.7988 18 15.0087 18C15.1953 18 15.3703 17.9157 15.5335 17.7471L17.7726 15.0492C18.0758 14.6276 18.0758 14.2061 17.7726 13.7845L15.4636 11.0867Z"
        fill={color}
      />
    </svg>
  );
}
function IconRepeatSongs({ color: color }) {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.55556 8.1C3.55556 6.11178 5.16733 4.5 7.15556 4.5H12.4444V7.2L16 3.6L12.4444 0V2.7H6.77778C4.01636 2.7 1.77778 4.93858 1.77778 7.7V8.1H3.55556V8.1ZM12.4444 9.9C12.4444 11.8882 10.8327 13.5 8.84445 13.5H3.55556V10.8L0 14.4L3.55556 18V15.3H9.22222C11.9836 15.3 14.2222 13.0614 14.2222 10.3V9.9H12.4444V9.9Z"
        fill={color}
      />
    </svg>
  );
}

export default IconRandomSongs;
export {
  IconHome,
  IconHomeActive,
  IconExplorer,
  IconExplorerActive,
  IconSearch,
  IconSearchActive,
  LogoSpotify,
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
  IconFavoritesTransparent,
  IconNotify,
  IconArrowDown,
  IconSearchLight,
  IconIdotMore,
  ImagePlaying,
  IconPreSong,
  IconNextSong,
  IconArrowUp,
  IconRandomSongs,
  IconRepeatSongs,
  songs,
};
