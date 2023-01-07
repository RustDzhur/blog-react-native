import { NavigationContainer } from "@react-navigation/native";
import { useNav } from "./src/navigations/useNav";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
	const routing = useNav(false);
	return (
		<Provider store={store}>
			<NavigationContainer>{routing}</NavigationContainer>
		</Provider>
	);
}
