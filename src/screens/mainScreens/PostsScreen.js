import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultScreenPosts } from "../nestedScreens/DefaultScreenPosts";
import { MapScreen } from "../nestedScreens/MapScreen";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
const NestesNavigator = createNativeStackNavigator();

export const PostsScreen = () => {
	return (
		<NestesNavigator.Navigator>
			<NestesNavigator.Screen
				name="DefaultScreen"
				component={DefaultScreenPosts}
				options={{ headerShown: false }}
			/>
			<NestesNavigator.Screen
				name="MapScreen"
				component={MapScreen}
				options={{ headerShown: false }}
			/>
			<NestesNavigator.Screen
				name="CommentsScreen"
				component={CommentsScreen}
				options={{ headerShown: false }}
			/>
		</NestesNavigator.Navigator>
	);
};
