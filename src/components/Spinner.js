import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Spinkit from 'react-native-spinkit';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Spinner({
  type, size, color, isVisible,
}) {
  return (
    <View style={styles.wrapper}>
      <Spinkit type={type} size={size} color={color} isVisible={isVisible} />
    </View>
  );
}

Spinner.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  isVisible: PropTypes.bool,
};

Spinner.defaultProps = {
  type: 'Wave',
  size: 100,
  color: '#4b77be',
  isVisible: true,
};
