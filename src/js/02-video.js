import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const timeFunction = data => {
  let playerSecond = data.seconds;
  localStorage.setItem('videoplayer-current-time', playerSecond);
};

player.on('timeupdate', throttle(timeFunction, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    //code here
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // time was less than 0 or greater than duration
        break;
      default:
        // some other error
        break;
    }
  });
