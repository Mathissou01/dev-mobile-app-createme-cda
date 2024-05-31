import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Root} from "@/navigation/Root";
import Product from "@/screens/Product";
import AboutScreen from "@/screens/SettingsScreen/AboutScreen";
import HelpScreen from "@/screens/SettingsScreen/HelpScreen";
import NotificationScreen from "@/screens/SettingsScreen/NotificationScreen";
import UserEditScreen from "@/screens/SettingsScreen/UserEditScreen";
import SecurityScreen from "@/screens/SettingsScreen/SecurityScreen";
import LogInScreen from "@screens/Auth/LoginScreen";

const RootStack = createNativeStackNavigator();

export const RootStackScreens = () => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Root" component={Root}/>
        <RootStack.Screen name="LoginScreen" component={LogInScreen}/>
        <RootStack.Screen name="Product" component={Product}/>
        <RootStack.Screen name="AboutScreen" component={AboutScreen}/>
        <RootStack.Screen name="HelpScreen" component={HelpScreen}/>
        <RootStack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
        />
        <RootStack.Screen name="UserEditScreen" component={UserEditScreen}/>
        <RootStack.Screen name="SecurityScreen" component={SecurityScreen}/>
    </RootStack.Navigator>
);
