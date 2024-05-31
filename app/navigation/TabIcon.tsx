import Ionicons from "react-native-vector-icons/Ionicons";

const getIconName = (name: string, focused: boolean) => {
    switch (name) {
        case "Home":
            return focused ? "home" : "home-outline";
        case "Settings":
            return focused ? "settings" : "settings-outline";
        case "Favorites":
            return focused ? "heart" : "heart-outline";
        case "Profile":
            return focused ? "person-circle" : "person-circle-outline";
        default:
            return "help-circle";
    }
};

export const TabIcon = ({name, focused, color}: { name: string, focused: boolean, color: string }) => {
    const iconName = getIconName(name, focused);
    return <Ionicons name={iconName} size={22} color={color}/>;
};
