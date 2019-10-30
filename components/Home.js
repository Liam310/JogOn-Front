import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

export default function Home({ actualRoute }) {
  return (
    <View>
      <Text>Hello</Text>
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
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
