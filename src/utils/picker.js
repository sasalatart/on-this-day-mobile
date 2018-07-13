import { Platform, NativeModules, NativeAppEventEmitter } from 'react-native';
import times from 'lodash/times';
import noop from 'lodash/noop';
import { CURRENT_MONTH, CURRENT_DAY, MONTHS } from '../utils/dates';

const Picker = NativeModules.BEEPickerManager;

const MAIN_FONT_COLOR = [255, 255, 255, 1];
const TITLE_COLOR = [255, 166, 49, 1];
const PICKER_TOOLBAR_COLOR = [31, 71, 136, 0.75];
const PICKER_BACKGROUND_COLOR = [75, 119, 190, 0.75];

const TOOLBAR_OPTIONS = {
  pickerTitleText: 'Select a Date',
  pickerConfirmBtnText: 'Confirm',
  pickerCancelBtnText: 'Cancel',
  pickerTitleColor: TITLE_COLOR,
  pickerConfirmBtnColor: MAIN_FONT_COLOR,
  pickerCancelBtnColor: MAIN_FONT_COLOR,
  pickerToolBarFontSize: 18,
  pickerToolBarBg: PICKER_TOOLBAR_COLOR,
};

const PICKER_OPTIONS = {
  isLoop: false,
  pickerTextEllipsisLen: 6,
  pickerFontColor: MAIN_FONT_COLOR,
  pickerFontSize: Platform.OS === 'ios' ? 32 : 20,
  pickerRowHeight: Platform.OS === 'ios' ? 32 : 20,
  pickerBg: PICKER_BACKGROUND_COLOR,
  pickerData: MONTHS
    .map(monthData => ({ [monthData[0]]: times([monthData[1]], num => num + 1) })),
  wheelFlex: [1, 1, 1],
  selectedValue: [CURRENT_MONTH, CURRENT_DAY],
  onPickerConfirm: noop,
  onPickerCancel: noop,
  onPickerSelect: noop,
};

export default class CustomPicker {
  constructor(params) {
    const finalOptions = { ...TOOLBAR_OPTIONS, ...PICKER_OPTIONS, ...params };

    // eslint-disable-next-line no-underscore-dangle
    Picker._init(finalOptions);

    const fnConf = {
      confirm: finalOptions.onPickerConfirm,
      cancel: finalOptions.onPickerCancel,
      select: finalOptions.onPickerSelect,
    };

    // There are no `removeListener` for NativeAppEventEmitter & DeviceEventEmitter
    if (this.listener) this.listener.remove();
    this.listener = NativeAppEventEmitter.addListener('pickerEvent', (event) => {
      fnConf[event.type](event.selectedValue, event.selectedIndex);
      if (event.type === 'cancel') params.onPickerHide();
    });

    this.onPickerShow = params.onPickerShow;
    this.onPickerHide = params.onPickerHide;
  }

  show() {
    Picker.show();
    this.onPickerShow();
  }

  hide() {
    Picker.hide();
    this.onPickerHide();
  }
}
