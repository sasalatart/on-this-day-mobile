import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppState,
} from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
import Picker from '../utils/picker';

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
  static propTypes = {
    loadEpisodes: PropTypes.func.isRequired,
  }

  state = { isPickerOpen: true };

  componentDidMount() {
    this.picker.show();
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  getPicker = () => (
    new Picker({
      onPickerConfirm: (date) => {
        this.props.loadEpisodes(...date);
      },
      onPickerShow: () => this.setState({ isPickerOpen: true }),
      onPickerHide: () => this.setState({ isPickerOpen: false }),
    })
  )

  handleAppStateChange = (nextState) => {
    if (nextState === 'active') {
      this.picker = this.getPicker();
      this.picker.show();
    }
  }

  picker = this.getPicker();

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>On This Day</Text>
        </View>
        {!this.state.isPickerOpen &&
          <View style={styles.buttonWrapper}>
            <Button text="Select a Date" onPress={() => this.picker.show()} style={styles.button} />
          </View>
        }
      </View>
    );
  }
}
