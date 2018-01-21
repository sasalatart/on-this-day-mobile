import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 75,
  },
});

export default function Episodes({ goToDateSelect }) {
  return (
    <View style={styles.wrapper}>
      <Button text="Go To Date Select" onPress={goToDateSelect} style={styles.button} />
    </View>
  );
}

Episodes.propTypes = {
  goToDateSelect: PropTypes.func.isRequired,
};
