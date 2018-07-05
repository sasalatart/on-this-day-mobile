import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Picker from 'react-native-picker';
import Button from './Button';
import { OPTIONS, PICKER_DATA } from '../config/picker';
import { CURRENT_MONTH, CURRENT_DAY } from '../utils/dates';

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
      pickerData: PICKER_DATA,
      selectedValue: [CURRENT_MONTH, CURRENT_DAY],
      onPickerConfirm: (date) => {
        this.setState({ isPickerShown: false });
        this.props.loadEpisodes(...date);
      },
      onPickerCancel: () => {
        this.setState({ isPickerShown: false });
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

DateSelect.propTypes = {
  loadEpisodes: PropTypes.func.isRequired,
};
