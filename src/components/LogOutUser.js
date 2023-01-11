import { signOut } from "firebase/auth";
import { authFirebase } from "../firebase/config";
import Toast from 'react-native-root-toast';

export const LogOut = () => {
  signOut(authFirebase)
    .then(() => {
      Toast.show('Sign-out successful', {
        duration: 500,
        position: 50,
      });
      // Sign-out successful.
    })
    .catch(error => {
      Toast.show('An error happened', {
        duration: 500,
        position: 50,
      });
      // An error happened.
    });
};