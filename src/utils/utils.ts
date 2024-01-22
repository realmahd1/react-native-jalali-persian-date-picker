import { PERSIAN_DIGITS } from './constant';
import { jalaaliMonthLength, toGregorian, toJalaali } from 'jalaali-js';

/**
 * convert jalali to gregorian date
 * @param {string} date
 * @param {string} dateSeparator
 */
const j2g = (date: string, dateSeparator: string) => {
  const split: string[] = date.split(dateSeparator);
  const year = parseInt(split[0] as string);
  const month = parseInt(split[1] as string);
  const day = parseInt(split[2] as string);

  const { gy, gm, gd } = toGregorian(year, month, day);
  return new Date(gy, gm - 1, gd);
};

export const isBefore = (firstDate: string, secondDate: string, dateSeparator: string) =>
  j2g(firstDate, dateSeparator) < j2g(secondDate, dateSeparator);

export const isAfter = (firstDate: string, secondDate: string, dateSeparator: string) =>
  j2g(firstDate, dateSeparator) > j2g(secondDate, dateSeparator);


/**
 * convert gregorian to jalali date
 * @param {string} date
 * @param {string} dateSeparator
 */
const g2j = (date: string, dateSeparator: string = '-') => {
  const split: string[] = date.split(dateSeparator);
  const year: number = parseInt(split[0] as string);
  const month: number = parseInt(split[1] as string);
  const day: number = parseInt(split[2] as string);

  const { jy, jm, jd } = toJalaali(year, month, day);
  return fullDate(jy, jm, jd, '/');
};

export const today = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return g2j(currentDate);
};

export const lastYear = () => {
  const currentDate: string = new Date().toISOString().slice(0, 10);
  const split: string[] = currentDate.split('-');
  const year: number = parseInt(split[0] as string) - 1;
  const month = split[1];
  const day = split[2];

  return g2j(`${year}-${month}-${day}`);
};

export const nextYear = () => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const split = currentDate.split('-');
  const year = parseInt(split[0] as string) + 1;
  const month = split[1];
  const day = split[2];

  return g2j(`${year}-${month}-${day}`);
};
export const getTimeHours = (): string[] =>
  Array.from({ length: 24 }, (_x, i) => i < 10 ? '0' + i : String(i));
export const getTimeMinutes = (): string[] =>
  Array.from({ length: 60 / 5 }, (_x, i) => i * 5 < 10 ? '0' + (i * 5) : String(i * 5));

export const getDays = (year: number, month: number) => {
  const daysLength = jalaaliMonthLength(year, month);
  const { gy, gm, gd } = toGregorian(year, month, 1);
  const firstDayIndex = new Date(gy, gm - 1, gd).getDay();
  const startingEmptyDays = (firstDayIndex + 1) % 7;

  return [
    ...Array(startingEmptyDays).fill('.'),
    ...Array.from({ length: daysLength }, (_, i) => i + 1),
  ];
};
export const getYears = (min: number, max: number) => {
  const length = max - min + 1;

  return Array.from({ length }, (_, i) => min + i);
};
export const fullDate = (year: number, month: number, day: number | string, dateSeparator: string): string =>
  `${year}${dateSeparator}${month < 10 ? '0' + month : month}${dateSeparator}${
    parseInt(day as string) < 10 ? '0' + day : day
  }`;

export const toPersian = (num: string) =>
  `${num}`
    .split('')
    .map((digit) => PERSIAN_DIGITS[Number(digit)])
    .join('');
