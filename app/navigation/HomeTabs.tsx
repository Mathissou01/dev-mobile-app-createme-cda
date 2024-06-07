import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/MainScreen/Home";
import Favorites from "@/screens/MainScreen/Favorites";
import Profile from "@/screens/MainScreen/Profile";
import Settings from "@/screens/MainScreen/Settings";
import { TabIcon } from "@/navigation/TabIcon";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ focused, color }) => {
          return <TabIcon name={route.name} focused={focused} color={color} />;
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#C7C6CC",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const styles = EStyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    position: "absolute",
  },
});
