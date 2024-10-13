import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { signOut } from "aws-amplify/auth";
const useNavbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const handleThemeChange = () => dispatch(setIsDarkMode(!isDarkMode));
  const handleToggleSidebar = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  return {
    isSidebarCollapsed,
    isDarkMode,
    handleSignOut,
    handleThemeChange,
    handleToggleSidebar,
  };
};

export default useNavbar;
