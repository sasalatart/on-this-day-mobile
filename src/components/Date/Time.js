import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  outerWrapper: {
    width: 45,
    alignItems: 'flex-end',
  },
  innerWrapper: {
    backgroundColor: theme.colors.primaryDark,
    padding: 5,
    borderRadius: 5,
  },
});

function Time({ year, isBCE }) {
  return (
    <View style={styles.outerWrapper}>
      <View style={styles.innerWrapper}>
        <Text style={styles.text}>{year}</Text>
        {isBCE && <Text style={styles.text}>BCE</Text>}
      </View>
    </View>
  );
}

Time.propTypes = {
  year: PropTypes.number.isRequired,
  isBCE: PropTypes.bool.isRequired,
};

export default Time;
