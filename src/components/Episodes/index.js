import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
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

export default function Episodes({ isLoading, goToDateSelect }) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.wrapper}>
      <Button text="Go To Date Select" onPress={goToDateSelect} style={styles.button} />
    </View>
  );
}

Episodes.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  goToDateSelect: PropTypes.func.isRequired,
};
