import { AuthNav } from "./AuthNav";
import { TabNav } from "./TabNav";

export const useNav = (isAuth) => {
	if (!isAuth) {
		return <AuthNav />;
	}
	return <TabNav />;
};