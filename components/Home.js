import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import StartButton from './StartButton';

export default function Home({
  actualRoute,
  _watchPosition,
  location,
  markers
}) {
  return (
    <View>
      <MapView
        showsUserLocation={true}
        initialRegion={{
          latitude: 53.8008,
          longitude: -1.5491,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.mapStyle}
      >
        <Polyline coordinates={actualRoute} />
        {markers.map(({ latitude, longitude }, index) => {
          return <Marker coordinate={{ latitude, longitude }} key={index} />;
        })}
      </MapView>
      <StartButton _watchPosition={_watchPosition} location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
    height: '80%'
  }
});
