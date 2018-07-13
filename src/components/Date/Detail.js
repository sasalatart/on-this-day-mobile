import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import theme from '../../theme';

const styles = StyleSheet.create({
  outerWrapper: {
    marginTop: -10,
  },
  innerWrapper: {
    backgroundColor: theme.colors.primaryLight,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textAlign: 'justify',
  },
});

function Detail({ episodes }) {
  return (
    <View style={styles.outerWrapper}>
      {episodes.map((episode, index) => {
        const marginBottom = index === episodes.length - 1 ? 0 : 10;
        return (
          <View key={episode.id} style={[styles.innerWrapper, { marginBottom }]}>
            <Text style={styles.text}>{episode.data}</Text>
          </View>
        );
      })}
    </View>
  );
}

Detail.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.string.isRequired,
  })).isRequired,
};

export default Detail;
