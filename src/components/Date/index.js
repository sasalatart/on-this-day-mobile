import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Tabs from 'react-native-tabs';
import Timeline from 'react-native-timeline-listview';
import keyMirror from 'keymirror';
import groupBy from 'lodash/groupBy';
import NavBar from '../../containers/NavBar';
import Spinner from '../Spinner';
import Time from './Time';
import Detail from './Detail';
import theme from '../../theme';
import { monthNumberToName } from '../../utils/dates';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  tabs: {
    backgroundColor: theme.colors.primaryLight,
  },
  selectedTab: {
    color: 'red',
  },
  selectedIconStyle: {
    borderTopWidth: 2,
    borderTopColor: 'red',
  },
  text: {
    color: 'white',
  },
  timeline: {
    marginTop: 15,
    marginBottom: 50,
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'white',
  },
  description: {
    display: 'none',
  },
});

const EPISODES_TYPES = keyMirror({
  events: null,
  births: null,
  deaths: null,
});

export default class Date extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    date: PropTypes.shape({
      day: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
    }),
  }

  static defaultProps = {
    date: undefined,
  }

  state = { page: EPISODES_TYPES.events };

  handleTabSelect = element => this.setState({ page: element.props.name });

  mapSelectedData = () => {
    const episodes = this.props.date[this.state.page];
    const groupedEpisodes = groupBy(episodes, ({ year, isBCE }) => year * (isBCE ? -1 : 1));
    const sortedYears = Object.keys(groupedEpisodes).sort(((a, b) => +a - +b));
    return sortedYears.map(year => ({
      year: Math.abs(year),
      isBCE: groupedEpisodes[year][0].isBCE,
      episodes: groupedEpisodes[year],
    }));
  }

  renderTab = type => (
    <Text name={type} selectedIconStyle={styles.selectedIconStyle} style={styles.text}>
      {type}
    </Text>
  );

  render() {
    if (this.props.isLoading) return <Spinner />;

    const { month, day } = this.props.date;
    const monthName = monthNumberToName(month);

    return (
      <View style={styles.container}>
        <NavBar title={`${monthName} ${day}`} />

        <Timeline
          data={this.mapSelectedData()}
          renderTime={rowData => <Time {...rowData} />}
          renderDetail={rowData => <Detail {...rowData} />}
          descriptionStyle={styles.description}
          separatorStyle={styles.separator}
          style={styles.timeline}
          separator
        />

        <Tabs
          selected={this.state.page}
          onSelect={this.handleTabSelect}
          selectedStyle={styles.selectedTab}
          style={styles.tabs}
        >
          {this.renderTab(EPISODES_TYPES.events)}
          {this.renderTab(EPISODES_TYPES.births)}
          {this.renderTab(EPISODES_TYPES.deaths)}
        </Tabs>
      </View>
    );
  }
}
