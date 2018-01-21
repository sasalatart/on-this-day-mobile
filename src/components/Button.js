import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F4788',
    borderColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    padding: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default function Button({ text, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.number,
};

Button.defaultProps = {
  style: null,
};
