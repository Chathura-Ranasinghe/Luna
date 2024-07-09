import riflebullet from '../assets/images/rifle-bullet.png';  

const speedImages = {
  riflebullet,
};

function compareSpeed(asteroidSpeed: number) {
  const averageSpeedOfRifleBulletInKilometersPerHour = 3600; // Speed of rifle bullet in km/h
  const roundedSpeed = Math.round(asteroidSpeed);

  if (roundedSpeed <= averageSpeedOfRifleBulletInKilometersPerHour) {
    return {
      compareSpeedimage: speedImages.riflebullet,
      compareSpeedlabel: 'Bullet'
    };
  } else {
    return {
      compareSpeedimage: speedImages.riflebullet,
      compareSpeedlabel: `${(roundedSpeed / averageSpeedOfRifleBulletInKilometersPerHour).toFixed(0)}X Bullet`
    };
  }
}

export { compareSpeed };
