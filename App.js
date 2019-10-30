import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Home from './components/Home';

export default class App extends React.Component {
  state = {
    errorMessage: null,
    actualRoute: []
  };

  render() {
    const { actualRoute } = this.state;
    return (
      <View style={styles.container}>
        <Home
          actualRoute={actualRoute}
          _watchPosition={this._watchPosition}
          location={this.location}
        />
      </View>
    );
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }
  };

  _watchPosition = async () => {
    this.location = await Location.watchPositionAsync(
      { distanceInterval: 1 },
      location => {
        this.setState(currentState => {
          const newLocation = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          };
          return {
            actualRoute: [...currentState.actualRoute, newLocation]
          };
        });
      }
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'pink'
  }
});
