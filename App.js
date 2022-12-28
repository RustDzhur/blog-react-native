import { NavigationContainer } from "@react-navigation/native";
import { useNav } from "./navigations/useNav";

export default function App() {
	const routing = useNav(true);
	return <NavigationContainer>{routing}</NavigationContainer>;
}
