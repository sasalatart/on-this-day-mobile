import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

const source = require('../assets/images/books.jpg');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default function BackgroundWrapper(props) {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.image} source={source} />
      {props.children}
    </View>
  );
}

BackgroundWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BackgroundWrapper.defaultProps = {
  children: null,
};
