export const MONTHS = [
  ['January', 31],
  ['February', 29],
  ['March', 31],
  ['April', 30],
  ['May', 31],
  ['June', 30],
  ['July', 31],
  ['August', 31],
  ['September', 30],
  ['October', 31],
  ['November', 30],
  ['December', 31],
];

const now = new Date();

export function monthNumberToName(number) {
  return MONTHS[number - 1][0];
}

export const CURRENT_MONTH = monthNumberToName(now.getMonth() + 1);
export const CURRENT_DAY = now.getDate();
