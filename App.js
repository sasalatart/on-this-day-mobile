import React from 'react';
import Picker from 'react-native-picker';
import { OPTIONS, VALUES } from './src/config/picker';
import BackgroundWrapper from './src/components/BackgroundWrapper';

Picker.init({
  ...OPTIONS,
  ...VALUES,
  onPickerConfirm: (date) => {
    console.log(date);
  },
  onPickerCancel: (date) => {
    console.log(date);
  },
  onPickerSelect: (date) => {
    console.log(date);
  },
});
Picker.show();

export default function App() {
  return <BackgroundWrapper />;
}
