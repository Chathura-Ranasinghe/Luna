import guitar from '../assets/images/guitar.png';
import door from '../assets/images/door.png';
import car from '../assets/images/car.png';
import giraffe from '../assets/images/giraffe.png';
import londonBus from '../assets/images/london-bus.png';
import electricPole from '../assets/images/electric-pole.png';
import building5Storey from '../assets/images/5-storey-building.png';
import truck from '../assets/images/semi-trailer-truck.png';
import building10Storey from '../assets/images/10-storey-building.png';
import aeroplane from '../assets/images/aeroplane.png';
import leaningTowerOfPisa from '../assets/images/leaning-tower-of-pisa.png';
import tajMahal from '../assets/images/taj-mahal.png';
import statueOfLiberty from '../assets/images/statue-of-liberty.png';
import footballField from '../assets/images/football-field.png';
import pyramid from '../assets/images/great-pyramids-of-giza.png';
import eiffelTower from '../assets/images/eiffel-tower.png';
import burjKhalifa from '../assets/images/burj-khalifa.png';
import kilimanjaro from '../assets/images/kilimanjaro.png';
import everest from '../assets/images/mount-everest.png';
import asteroid from '../assets/images/asteroid.png';

const sizeImages = {
  guitar,
  door,
  car,
  giraffe,
  londonBus,
  electricPole,
  building5Storey,
  truck,
  building10Storey,
  aeroplane,
  leaningTowerOfPisa,
  tajMahal,
  statueOfLiberty,
  footballField,
  pyramid,
  eiffelTower,
  burjKhalifa,
  kilimanjaro,
  everest,
  asteroid,
};

export function compareSize(asteroidEstimatedSize: number) {
  if (asteroidEstimatedSize <= 1) {
    return { compareSizeimage: sizeImages.guitar, compareSizelabel: 'Guitar' };
  }
  if (asteroidEstimatedSize <= 2) {
    return { compareSizeimage: sizeImages.door, compareSizelabel: 'Door' };
  }
  if (asteroidEstimatedSize >= 3 && asteroidEstimatedSize <= 4) {
    return { compareSizeimage: sizeImages.car, compareSizelabel: 'Car' };
  }
  if (asteroidEstimatedSize >= 5 && asteroidEstimatedSize <= 7) {
    return { compareSizeimage: sizeImages.giraffe, compareSizelabel: 'Giraffe' };
  }
  if (asteroidEstimatedSize >= 8 && asteroidEstimatedSize <= 9) {
    return { compareSizeimage: sizeImages.londonBus, compareSizelabel: 'London Bus' };
  }
  if (asteroidEstimatedSize >= 10 && asteroidEstimatedSize <= 12) {
    return { compareSizeimage: sizeImages.electricPole, compareSizelabel: 'Electric Pole' };
  }
  if (asteroidEstimatedSize >= 13 && asteroidEstimatedSize <= 15) {
    return { compareSizeimage: sizeImages.building5Storey, compareSizelabel: '5-Storey Building' };
  }
  if (asteroidEstimatedSize >= 16 && asteroidEstimatedSize <= 20) {
    return { compareSizeimage: sizeImages.truck, compareSizelabel: 'Semi-Trailer Truck' };
  }
  if (asteroidEstimatedSize >= 21 && asteroidEstimatedSize <= 40) {
    return { compareSizeimage: sizeImages.building10Storey, compareSizelabel: '10-Storey Building' };
  }
  if (asteroidEstimatedSize >= 41 && asteroidEstimatedSize <= 50) {
    return { compareSizeimage: sizeImages.aeroplane, compareSizelabel: 'Aeroplane' };
  }
  if (asteroidEstimatedSize >= 51 && asteroidEstimatedSize <= 70) {
    return { compareSizeimage: sizeImages.leaningTowerOfPisa, compareSizelabel: 'Leaning Tower of Pisa' };
  }
  if (asteroidEstimatedSize >= 71 && asteroidEstimatedSize <= 80) {
    return { compareSizeimage: sizeImages.tajMahal, compareSizelabel: 'Taj Mahal' };
  }
  if (asteroidEstimatedSize >= 81 && asteroidEstimatedSize <= 90) {
    return { compareSizeimage: sizeImages.statueOfLiberty, compareSizelabel: 'Statue of Liberty' };
  }
  if (asteroidEstimatedSize >= 91 && asteroidEstimatedSize <= 180) {
    return { compareSizeimage: sizeImages.footballField, compareSizelabel: 'Football Field' };
  }
  if (asteroidEstimatedSize >= 181 && asteroidEstimatedSize <= 200) {
    return { compareSizeimage: sizeImages.pyramid, compareSizelabel: 'Great Pyramid of Giza' };
  }
  if (asteroidEstimatedSize >= 201 && asteroidEstimatedSize <= 400) {
    return { compareSizeimage: sizeImages.eiffelTower, compareSizelabel: 'Eiffel Tower' };
  }
  if (asteroidEstimatedSize >= 401 && asteroidEstimatedSize <= 700) {
    return { compareSizeimage: sizeImages.eiffelTower, compareSizelabel: '2x Eiffel Tower' };
  }
  if (asteroidEstimatedSize >= 701 && asteroidEstimatedSize <= 900) {
    return { compareSizeimage: sizeImages.burjKhalifa, compareSizelabel: 'Burj Khalifa' };
  }
  if (asteroidEstimatedSize >= 901 && asteroidEstimatedSize <= 1000) {
    return { compareSizeimage: sizeImages.footballField, compareSizelabel: '10x Football Fields' };
  }
  if (asteroidEstimatedSize >= 1001 && asteroidEstimatedSize <= 2000) {
    return { compareSizeimage: sizeImages.burjKhalifa, compareSizelabel: '2x Burj Khalifa' };
  }
  if (asteroidEstimatedSize >= 2001 && asteroidEstimatedSize <= 3000) {
    return { compareSizeimage: sizeImages.burjKhalifa, compareSizelabel: '3x Burj Khalifa' };
  }
  if (asteroidEstimatedSize >= 3001 && asteroidEstimatedSize <= 4000) {
    return { compareSizeimage: sizeImages.burjKhalifa, compareSizelabel: '4x Burj Khalifa' };
  }
  if (asteroidEstimatedSize >= 4001 && asteroidEstimatedSize <= 6000) {
    return { compareSizeimage: sizeImages.kilimanjaro, compareSizelabel: 'Kilimanjaro' };
  }
  if (asteroidEstimatedSize >= 6001 && asteroidEstimatedSize <= 9000) {
    return { compareSize: sizeImages.everest, compareSizelabel: 'Mount Everest' };
  }
  if (asteroidEstimatedSize >= 9000) {
    return { compareSizeimage: sizeImages.everest, compareSizelabel: `${(asteroidEstimatedSize / 8000).toFixed(1)}x Mount Everest` };
  }
  return { compareSizeimage: sizeImages.asteroid, compareSizelabel: 'Asteroids' };
}
