import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
const useNavbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const handleThemeChange = () => dispatch(setIsDarkMode(!isDarkMode));
  const handleToggleSidebar = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  return {
    isSidebarCollapsed,
    isDarkMode,
    handleThemeChange,
    handleToggleSidebar,
  };
};

export default useNavbar;
