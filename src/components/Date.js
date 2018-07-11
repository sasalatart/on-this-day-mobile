import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Tabs from 'react-native-tabs';
import keyMirror from 'keymirror';
import URI from 'urijs';
import Spinner from './Spinner';
import NavBar from '../containers/NavBar';
import { monthNumberToName } from '../utils/dates';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  tabs: {
    backgroundColor: 'rgba(75, 119, 190, 0.75)',
  },
  tab: {
    color: 'white',
  },
  selectedTab: {
    color: 'red',
  },
  selectedIconStyle: {
    borderTopWidth: 2,
    borderTopColor: 'red',
  },
  button: {
    marginHorizontal: 75,
  },
});

const EPISODES_TYPES = keyMirror({
  events: null,
  births: null,
  deaths: null,
});

function renderTab(type) {
  return (
    <Text
      name={type}
      selectedIconStyle={styles.selectedIconStyle}
      style={styles.tab}
    >
      {type}
    </Text>
  );
}

export default class Date extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }

  state = { page: EPISODES_TYPES.events };

  handleTabSelect = element => this.setState({ page: element.props.name });

  renderNavBar() {
    const { month, day } = URI.parseQuery(this.props.location.search);
    const title = `${monthNumberToName(month)} ${day}`;
    return <NavBar title={title} />;
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <Spinner />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {this.renderNavBar()}

        <Tabs
          selected={this.state.page}
          onSelect={this.handleTabSelect}
          selectedStyle={styles.selectedTab}
          style={styles.tabs}
        >
          {renderTab(EPISODES_TYPES.events)}
          {renderTab(EPISODES_TYPES.births)}
          {renderTab(EPISODES_TYPES.deaths)}
        </Tabs>
      </View>
    );
  }
}
