import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from 'react-native-picker';
import { OPTIONS, VALUES } from './src/config/picker';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  );
}
