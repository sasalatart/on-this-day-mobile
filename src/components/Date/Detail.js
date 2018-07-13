import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Collapsible from 'react-native-collapsible';
import Keywords from './Keywords';
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
  keywordsToggler: {
    marginVertical: 10,
  },
  keywordsTogglerText: {
    color: theme.colors.gold,
  },
});

export default class Detail extends PureComponent {
  static propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.string.isRequired,
    })).isRequired,
  };

  state = { activeKeywords: undefined };

  handleToggleKeywords(episodeId) {
    this.setState(prevState => ({
      activeKeywords: prevState.activeKeywords === episodeId ? undefined : episodeId,
    }));
  }

  render() {
    const { episodes } = this.props;
    const { activeKeywords } = this.state;

    return (
      <View style={styles.outerWrapper}>
        {episodes.map((episode, index) => {
          const marginBottom = index === episodes.length - 1 ? 0 : 10;
          const keywordsCollapsed = activeKeywords !== episode.id;

          return (
            <View key={episode.id} style={[styles.innerWrapper, { marginBottom }]}>
              <Text style={styles.text}>{episode.data}</Text>

              <TouchableOpacity
                onPress={() => this.handleToggleKeywords(episode.id)}
                style={styles.keywordsToggler}
              >
                <Text style={styles.keywordsTogglerText}>
                  {keywordsCollapsed ? 'Show' : 'Hide'} Keywords
                </Text>
              </TouchableOpacity>

              <Collapsible collapsed={keywordsCollapsed}>
                <Keywords keywords={episode.kw} />
              </Collapsible>
            </View>
          );
        })}
      </View>
    );
  }
}
