import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const key = 'videoplayer-current-time';
const playTime = localStorage.getItem(key);

player.on('play', function () {
  console.log('played the video!');
});

function onPlay(event) {
  const time = event.seconds;
  localStorage.setItem(key, time);
}

if (playTime) {
  player.setCurrentTime(playTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
