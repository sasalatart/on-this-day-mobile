# On This Day Mobile

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Code Climate](https://codeclimate.com/github/sasalatart/on-this-day-mobile/badges/gpa.svg)](https://codeclimate.com/github/sasalatart/on-this-day-mobile)

## About

React Native mobile app that displays events, births and deaths that occurred in a specific day in history. Information shown is taken from this [API](https://github.com/sasalatart/on-this-day), which in turn scraped it from [Wikipedia](http://www.wikipedia.org).

## Demo

![demo](https://goo.gl/HNWNCc)

## Setup

#### Development

1. Make sure you have your [React Native environment](https://facebook.github.io/react-native/) set up.
2. Clone and cd into this repository
3. Run `yarn install`
4. Depending on the simulator/emulator that you want to use:
  - For iOS (Mac only):
    - Run `react-native run-ios`
  - For Android:
    - Make sure to have your Android Emulator up and running.
    - Run `react-native run-android`

If you wish to host the API in your own server, with a different domain name, remember to change the file `/src/utils/api.js` accordingly.
