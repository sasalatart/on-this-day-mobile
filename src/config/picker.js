import _ from 'lodash';

const MONTHS = [
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

const PICKER_DATA = MONTHS
  .map(monthData => ({ [monthData[0]]: _.times([monthData[1]], num => num + 1) }));

const now = new Date();
const INITIAL_VALUE = [MONTHS[now.getMonth()], now.getDate()];

const MAIN_FONT_COLOR = [255, 255, 255, 1];
const TITLE_COLOR = [0, 0, 0, 1];
const PICKER_TOOLBAR_COLOR = [207, 0, 15, 0.75];
const PICKER_BACKGROUND_COLOR = [242, 38, 19, 0.75];

const TOOLBAR_OPTIONS = {
  pickerTitleText: 'Select A Date',
  pickerConfirmBtnText: 'Confirm',
  pickerCancelBtnText: 'Cancel',
  pickerTitleColor: TITLE_COLOR,
  pickerConfirmBtnColor: MAIN_FONT_COLOR,
  pickerCancelBtnColor: MAIN_FONT_COLOR,
  pickerToolBarFontSize: 20,
  pickerToolBarBg: PICKER_TOOLBAR_COLOR,
};

const PICKER_OPTIONS = {
  pickerFontColor: MAIN_FONT_COLOR,
  pickerFontSize: 32,
  pickerRowHeight: 32,
  pickerBg: PICKER_BACKGROUND_COLOR,
};

export const OPTIONS = { ...TOOLBAR_OPTIONS, ...PICKER_OPTIONS };

export const VALUES = {
  pickerData: PICKER_DATA,
  selectedValue: INITIAL_VALUE,
};
