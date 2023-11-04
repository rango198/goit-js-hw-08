import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
player
  .setCurrentTime(currentTime)
  .then(seconds => {
    // seconds = фактичний час, до якого перемкнув плеєр
  })
  .catch(error => {
    switch (error.name) {
      case 'RangeError':
        // час був менше 0 або більше тривалості відео
        break;
      default:
        // сталася якась інша помилка
        break;
    }
  });
player
  .setColor('#45a247')
  .then(color => {
    // встановлений колір
  })
  .catch(error => {
    // сталася помилка під час встановлення кольору
  });
