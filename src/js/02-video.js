import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  let video = document.querySelector('iframe');

  // если localStorage содержит значение currentTime (текущее время), присваиваем это значение video.currentTime
  if (localStorage.currentTime) {
    video.currentTime = localStorage.currentTime;
  }

  // при каждом изменении video.currentTime, записываем его значение в localStorage.currentTime
  video.addEventListener(
    'timeupdate',
    () => (localStorage.currentTime = video.currentTime)
  );
};

player.on('play', onPlay);

// window.onload = () => {
//   // находим элемент <video>
//   let video = document.querySelector('#vimeo-player');

//   // если localStorage содержит значение currentTime (текущее время), присваиваем это значение video.currentTime
//   if (localStorage.currentTime) {
//     video.currentTime = localStorage.currentTime;
//   }

//   // при каждом изменении video.currentTime, записываем его значение в localStorage.currentTime
//   video.addEventListener(
//     'timeupdate',
//     () => (localStorage.currentTime = video.currentTime)
//   );
// };
