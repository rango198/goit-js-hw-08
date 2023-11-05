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
    // seconds = the actual time that the player seeked to
  })
  .catch(error => {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;
      default:
        // some other error occurred
        break;
    }
  });
player
  .setColor('#f01428')
  .then(color => {
    // the color that was set
  })
  .catch(error => {
    // an error occurred setting the color
  });
