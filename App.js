import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useNav } from "./src/navigations/useNav";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { RootSiblingParent } from "react-native-root-siblings";
import { authFirebase } from "./src/firebase/config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
	const [isLogedIn, setIsLogedIn] = useState(null)
	onAuthStateChanged(authFirebase, (user) => {
		if(user) {
			setIsLogedIn(user)
		}
	})
	
	const routing = useNav(isLogedIn);
	return (
		<Provider store={store}>
			<RootSiblingParent>
				<NavigationContainer>{routing}</NavigationContainer>
			</RootSiblingParent>
		</Provider>
	);
}
