import { getChineseZodiac } from './zodiac';
import { getZodiacSign } from './Astrologie';

test('renders learn react link', () => {
  //ZODIAC CHINOIS
  expect(getChineseZodiac(1900)).toBe('Rat');
  expect(getChineseZodiac(1990)).toBe('Horse');

  //ASTROLOGIE TROPICALE
  expect(getZodiacSign(12, 10)).toBe('Balance');
  expect(getZodiacSign(29, 7)).toBe('Lion');
});

