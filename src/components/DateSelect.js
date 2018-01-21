import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Picker from 'react-native-picker';
import { OPTIONS, VALUES } from '../config/picker';
import Button from './Button';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 75,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  button: {
    margin: 75,
  },
});

export default class DateSelect extends Component {
  constructor(props) {
    super(props);

    this.state = { isPickerShown: true };

    this.picker = Picker.init({
      ...OPTIONS,
      ...VALUES,
      onPickerConfirm: () => {
        this.setState({ isPickerShown: false });
      },
      onPickerCancel: () => {
        this.setState({ isPickerShown: false });
      },
      onPickerSelect: (date) => {
        console.log(date);
      },
    });
    Picker.show();

    this.showPicker = this.showPicker.bind(this);
  }

  showPicker() {
    Picker.show();
    this.setState({ isPickerShown: true });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>On This Day</Text>
        </View>
        {!this.state.isPickerShown &&
          <View style={styles.buttonWrapper}>
            <Button text="Select A Date" onPress={this.showPicker} style={styles.button} />
          </View>
        }
      </View>
    );
  }
}
