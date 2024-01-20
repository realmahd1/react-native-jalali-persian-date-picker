import { PERSIAN_DIGITS } from './constant';


export const toPersian = (num:string) =>
  `${num}`
    .split('')
    .map((digit) => PERSIAN_DIGITS[Number(digit)])
    .join('');
