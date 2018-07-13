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
import theme from '../theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    backgroundColor: theme.colors.primaryDark,
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
