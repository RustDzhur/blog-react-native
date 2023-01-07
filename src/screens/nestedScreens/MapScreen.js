import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
export const MapScreen = () => {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.001,
					longitudeDelta: 0.006,
				}}>
				<Marker
					coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title='We are here'
				/>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});
