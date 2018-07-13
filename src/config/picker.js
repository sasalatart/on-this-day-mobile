import { Platform } from 'react-native';
import times from 'lodash/times';
import { MONTHS } from '../utils/dates';

const MAIN_FONT_COLOR = [255, 255, 255, 1];
const TITLE_COLOR = [255, 166, 49, 1];
const PICKER_TOOLBAR_COLOR = [31, 71, 136, 0.75];
const PICKER_BACKGROUND_COLOR = [75, 119, 190, 0.75];

const TOOLBAR_OPTIONS = {
  pickerTitleText: 'Select A Date',
  pickerConfirmBtnText: 'Confirm',
  pickerCancelBtnText: 'Cancel',
  pickerTitleColor: TITLE_COLOR,
  pickerConfirmBtnColor: MAIN_FONT_COLOR,
  pickerCancelBtnColor: MAIN_FONT_COLOR,
  pickerToolBarFontSize: 18,
  pickerToolBarBg: PICKER_TOOLBAR_COLOR,
};

const PICKER_OPTIONS = {
  pickerFontColor: MAIN_FONT_COLOR,
  pickerFontSize: Platform.OS === 'ios' ? 32 : 20,
  pickerRowHeight: Platform.OS === 'ios' ? 32 : 20,
  pickerBg: PICKER_BACKGROUND_COLOR,
};

export const OPTIONS = { ...TOOLBAR_OPTIONS, ...PICKER_OPTIONS };

export const PICKER_DATA = MONTHS
  .map(monthData => ({ [monthData[0]]: times([monthData[1]], num => num + 1) }));
