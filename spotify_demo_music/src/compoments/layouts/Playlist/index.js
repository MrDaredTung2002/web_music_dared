import styles from "./playlist.module.scss";
import classNames from "classnames/bind";
import {
  LogoSpotify,
  IconIdotMore,
  ImagePlaying,
  IconPreSong,
  IconNextSong,
  IconRandomSongs,
  IconRepeatSongs,
  IconArrowUp,
  songs,
} from "~/compoments/assets/assets_helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useLayoutEffect } from "react";
const cx = classNames.bind(styles);
var countState = 0;
var secondRunSong = 0;
var countDown;
var arrIndexSongs = [];
var arrIndexSongs2 = [];
for (var i = 0; i < songs.length; i++) {
  arrIndexSongs.push(i);
  arrIndexSongs2.push(i);
}
function Playlist() {
  const height = window.innerHeight;

  var min = Math.floor(secondRunSong / 60);
  var second = Math.floor(secondRunSong % 60);
  if (min < 10) {
    min = "0" + min;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var timeRunSong = min + ":" + second;
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allTimes, setAllTimes] = useState([]);
  const [allTimesSongSecond, setAllTimesSongSecond] = useState([]);
  const [isRandomSongs, setIsRandomSongs] = useState(false);
  const [replaySongs, setReplaySongs] = useState(0);
  const audioRef = useRef(null);
  const secondRun = useRef(null);
  const lineSongs = useRef(null);
  const backgroundLineSongs = useRef(null);
  const handleSetPercent = (percent) => {
    lineSongs.current.style.width = `${percent}%`;
  };
  const handleSetTimeRun = () => {
    var min = Math.floor(secondRunSong / 60);
    var second = Math.floor(secondRunSong % 60);
    if (min < 10) {
      min = "0" + min;
    }
    if (second < 10) {
      second = "0" + second;
    }
    secondRun.current.innerHTML = min + ":" + second;
  };
  function selectSong(i) {
    setCurrentSong(i);
    clearInterval(countDown);
    handleSetPercent(0);
    secondRunSong = 0;
    handleSetTimeRun();
    audioRef.current.autoplay = true;
    runTimeSong(i);
    setIsPlaying(true);
  }
  const runTimeSong = (currentSong) => {
    countDown = setInterval(() => {
      if (secondRunSong == allTimesSongSecond[currentSong]) {
        clearInterval(countDown);
        if (replaySongs == 2) {
          audioRef.current.play();
          selectSong(currentSong);
        } else if (
          (arrIndexSongs.length != 0 || replaySongs == 1) &&
          isRandomSongs
        ) {
          handleNextSong("new");
        } else if (replaySongs == 0 || isRandomSongs || replaySongs == 1) {
          handleNextSong();
        } else {
          setIsPlaying(false);
        }
      } else {
        secondRunSong++;
        handleSetTimeRun();
        var percent = (secondRunSong * 80) / allTimesSongSecond[currentSong];
        handleSetPercent(percent);
      }
    }, 1000);
  };
  const play = () => {
    runTimeSong(currentSong);
    audioRef.current.play();
    setIsPlaying(true);
  };
  const pause = () => {
    clearInterval(countDown);
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handlePreSong = () => {
    var current;
    if (currentSong > 0) {
      current = currentSong - 1;
      selectSong(current);
    } else {
      current = songs.length - 1;
      selectSong(current);
    }
  };
  const handleNextSong = (value) => {
    if (value == "new" && arrIndexSongs.length == 0) {
      arrIndexSongs = arrIndexSongs2;
    }
    console.log(arrIndexSongs);
    var random = Math.floor(Math.random() * arrIndexSongs.length);
    var current;
    if (!isRandomSongs) {
      if (currentSong < songs.length - 1) {
        current = currentSong + 1;
        selectSong(current);
      } else {
        selectSong(0);
      }
    } else {
      for (var i = 0; i < arrIndexSongs.length; i++) {
        if (arrIndexSongs[i] == arrIndexSongs[random]) {
          console.log(arrIndexSongs[i]);
          selectSong(arrIndexSongs[i]);
          arrIndexSongs.splice(i, 1);
        }
      }
    }
  };
  countState++;
  useLayoutEffect(() => {
    var listTime = [];
    var listTimeSecond = [];
    for (let i = 0; i < songs.length; i++) {
      new Promise((resolve, reject) => {
        var audioNew = new Audio(songs[i].src);
        resolve(audioNew);
      }).then((audioNew) => {
        var timer;
        return audioNew.addEventListener("loadedmetadata", () => {
          var num = Number(audioNew.duration);
          var second = Math.floor(num) % 60;
          var min = Math.floor(Math.floor(num) / 60);

          if (min < 10) {
            min = "0" + min;
          }
          if (second < 10) {
            second = "0" + second;
          }
          timer = `${min}:${second}`;
          listTimeSecond[i] = Math.floor(num);
          listTime[i] = timer;
          if (i == songs.length - 1) {
            setAllTimes(listTime);
            setAllTimesSongSecond(listTimeSecond);
          }
        });
      });
    }
  }, []);
  const handleOnMouseLine = (e) => {
    var progress =
      (e.pageX - lineSongs.current.getBoundingClientRect().left) /
      backgroundLineSongs.current.clientWidth;
    var currentTime = Math.floor(progress * allTimesSongSecond[currentSong]);
    handleSetPercent(progress * 80);
    secondRunSong = currentTime;
    audioRef.current.currentTime = currentTime;
    if (audioRef.current.paused) {
      play();
      setIsPlaying(true);
    }
  };
  return (
    <div className={cx("playlist")} style={{ height: height - 100 }}>
      <div className={cx("playlist_music")}>
        <div className={cx("title_playlist")}>
          <div className={cx("name_playlist")}>
            <span>Top 100 Weekly</span>
          </div>
          <div className={cx("more_playlist")}>
            <span>More list</span>
          </div>
        </div>
        <div className={cx("musics")}>
          {songs.map((song, i) => {
            return (
              <div
                key={i}
                className={cx("tracks", currentSong == i ? "active" : "")}
                onClick={(song) => selectSong(i)}>
                <div className={cx("first_tracks")}>
                  <div className={cx("index_tracks")}>{i + 1}</div>
                  <div className={cx("image_tracks")}>
                    <img src={song.thumbnail}></img>
                  </div>
                  <div className={cx("name_music")}>
                    <div className={cx("name_tracks")}>{song.name}</div>
                    <div className={cx("name_artists")}>{song.artists}</div>
                  </div>
                </div>
                <div className={cx("end_tracks")}>
                  <div className={cx("timer_tracks")}>{allTimes[i]}</div>
                  <IconIdotMore></IconIdotMore>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx("line_border")}></div>
      <div className={cx("now_playing")}>
        <div className={cx("playing_music")}>
          <div className={cx("title_playing")}>Now Playing</div>
          <div className={cx("image_playing")}>
            <img src={songs[currentSong].thumbnail}></img>
          </div>
          <div className={cx("name_playing")}>{songs[currentSong].name}</div>
          <div className={cx("artists_playing")}>
            {songs[currentSong].artists}
          </div>
        </div>
        <div className={cx("playing_audio")}>
          <div
            className={cx("background_progress")}
            ref={backgroundLineSongs}
            onClick={handleOnMouseLine}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={0}>
            <div
              className={cx("progress")}
              ref={lineSongs}
              style={{ width: "0%" }}
              aria-valuemax={100}
              aria-valuemin={0}
              aria-valuenow={0}></div>

            <audio ref={audioRef} src={songs[currentSong].src}></audio>
          </div>
          <div className={cx("playing_timer")}>
            <span className={cx("current_time")} ref={secondRun}>
              {timeRunSong}
            </span>
            <span className={cx("total_time")}>{allTimes[currentSong]}</span>
          </div>
          <div className={cx("btn_icon_song")}>
            <div onClick={() => setIsRandomSongs(!isRandomSongs)}>
              <IconRandomSongs
                color={isRandomSongs ? "#4343EF" : "#B4B4F8"}></IconRandomSongs>
            </div>
            <IconPreSong onClick={handlePreSong}></IconPreSong>
            <div
              className={cx("icon_play_pause")}
              onClick={() => {
                if (isPlaying) {
                  pause();
                } else {
                  play();
                }
                setIsPlaying(!isPlaying);
              }}>
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                color="#fff"
                size="lg"
              />
            </div>
            <IconNextSong onClick={() => handleNextSong("new")}></IconNextSong>
            <div
              className={cx("icon_replay")}
              onClick={() => {
                if (replaySongs == 0) {
                  setReplaySongs(1);
                } else if (replaySongs == 1) {
                  setReplaySongs(2);
                } else {
                  setReplaySongs(0);
                }
              }}>
              <IconRepeatSongs
                color={
                  replaySongs == 1 || replaySongs == 2 ? "#4343EF" : "#B4B4F8"
                }></IconRepeatSongs>
              {replaySongs == 2 ? (
                <div className={cx("icon_replay_1")}>1</div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className={cx("playing_lyrics")}>
            <IconArrowUp></IconArrowUp>
            <span>Lyrics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
