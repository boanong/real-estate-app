// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// class LocationMap extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           <Marker
//             coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
//             title="My Location"
//             description="This is where I am"
//           />
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default LocationMap;