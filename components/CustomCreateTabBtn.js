import { TouchableOpacity, View, StyleSheet } from "react-native";

export const CustomCreateTabBtn = ({ children, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				top: -10,
				justifyContent: "center",
				alignItems: "center",
				...styles.shadow,
			}}
			onPress={onPress}>
			<View
				style={{
					width: 70,
					height: 70,
					borderRadius: 35,
					backgroundColor: "#FF6C00",
				}}>
				{children}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#7F5DF0",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
});