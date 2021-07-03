import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
// import { useHistory } from 'react-router-native';
import { styles, customMap } from './styles/mapStyles';
// import { getMountains } from '../store/getAllMountains.store';
// import GreenMountain from '../assets/greenMountain.png';
// import RedMountain from '../assets/redMountain.png';

const RouteMap = () => (
  <SafeAreaView style={styles.container}>
    <MapView
      mapType="terrain"
      region={{
        latitude: 57.3017,
        longitude: -4.60763,
        latitudeDelta: 4.5,
        longitudeDelta: 1,
      }}
      style={styles.map}
    >
      <Polyline
        coordinates={[

          { latitude: 56.149528709339, longitude: -4.6420955523643 },
          { latitude: 56.152639871854, longitude: -4.6353042229788 },
          { latitude: 56.158757201152, longitude: -4.6202616563449 },
          { latitude: 56.164020086746, longitude: -4.6157877749323 },
          { latitude: 56.169724913977, longitude: -4.6180286319063 },
          { latitude: 56.178932505124, longitude: -4.6203881658375 },
          { latitude: 56.187306648661, longitude: -4.6239008342587 },
          { latitude: 56.18847453615, longitude: -4.6302667415865 },
          { latitude: 56.19021294627, longitude: -4.6330454213062 },
          { latitude: 56.191834255138, longitude: -4.6392014707877 },
          { latitude: 56.189323304818, longitude: -4.6431392256968 },
          { latitude: 56.18814288478, longitude: -4.645798107291 },
          { latitude: 56.184030044961, longitude: -4.6468847790002 },
          { latitude: 56.175351944852, longitude: -4.6429033873697 },
          { latitude: 56.165058208471, longitude: -4.638812969313 },
          { latitude: 56.159319824638, longitude: -4.6423653098655 },
          { latitude: 56.156584238053, longitude: -4.642096903143 },
          { latitude: 56.152718199784, longitude: -4.6421535127197 },
          { latitude: 56.149621037603, longitude: -4.6419811255503 },

        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#7F0000',
          '#E5845C',
          '#238C23',
        ]}
        strokeWidth={6}
      />
    </MapView>
  </SafeAreaView>
);
export default RouteMap;

// const mountainList: MountainInfo[] = useSelector((state:any) => state.allMountains.mountainList);
// const dispatch = useDispatch();
// const history = useHistory();

// const listOfMarkers = mountainList ? mountainList.map((location: any) => {
//   const markerLocation = {
//     latitude: location.Peak.latitude,
//     longitude: location.Peak.longitude,
//   };
//   return (
//     <Marker
//       onPress={() => history.push(`/mountain/${location.id}`)}
//       key={location.id}
//       coordinate={markerLocation}
//       image={location.Statuses[0]?.climbed ? GreenMountain : RedMountain}
//     >
//       <Callout>
//         <Text>{location.name}</Text>
//       </Callout>
//     </Marker>
//   );
// }) : null;

// useEffect(() => {
//   dispatch(getMountains());
// }, [dispatch]);
