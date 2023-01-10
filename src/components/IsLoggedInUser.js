import { authFirebase } from "../firebase/config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const IsLoggedInUser = () => {
  
  const [isLoggedIn, setIsLogedIn] = useState(null)
	onAuthStateChanged(authFirebase, (user) => {
		if(user) {
			setIsLogedIn(true)
		}
		if(!user) {
			setIsLogedIn(false)
		}
	})
  return isLoggedIn
}