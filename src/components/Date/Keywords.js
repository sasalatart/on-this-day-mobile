import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  keyword: {
    color: 'yellow',
    textDecorationLine: 'underline',
  },
});

const WIKI_BASE_URL = 'http://wikipedia.org';

function Keywords({ keywords }) {
  return (
    <View>
      {keywords.map(({ id, title, href }) => (
        <TouchableOpacity key={id} onPress={() => Linking.openURL(`${WIKI_BASE_URL}${href}`)}>
          <Text style={styles.keyword}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

Keywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })),
};

Keywords.defaultProps = {
  keywords: [],
};

export default Keywords;
