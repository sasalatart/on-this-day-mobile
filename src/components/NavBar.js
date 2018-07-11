import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 55,
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    backgroundColor: 'rgba(31, 71, 136, 0.75)',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  goBackButton: {
    position: 'absolute',
    left: 0,
    padding: 25,
  },
});

function NavBar({ title, goBack }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
        <Icon name="arrow-left" color="white" size={18} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default NavBar;
