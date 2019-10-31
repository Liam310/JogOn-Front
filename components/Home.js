import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import StartButton from './StartButton';
import { FlagRef } from './FlagRef';
import RouteList from './RouteList';
import { style } from './CustomMapStyle';

export default function Home({
  actualRoute,
  _watchPosition,
  locationUpdates,
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
        customMapStyle={style}
        style={styles.mapStyle}
        showsMyLocationButton={true}
      >
        <Polyline coordinates={actualRoute} />
        {markers.map(({ id, latitude, longitude }, index) => {
          return (
            <Marker
              image={FlagRef[id]}
              coordinate={{ latitude, longitude }}
              key={index}
            />
          );
        })}
      </MapView>
      <StartButton
        _watchPosition={_watchPosition}
        locationUpdates={locationUpdates}
      />
      <RouteList />
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '80%'
  }
});
