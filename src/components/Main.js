import { NavigationContainer } from "@react-navigation/native";
import { useNav } from "../navigations/useNav";
import { IsLoggedInUser } from "./IsLoggedInUser";

export const Main = () => {
  const routing = useNav(IsLoggedInUser());
  
  return (
    <NavigationContainer>{routing}</NavigationContainer>
  )
}