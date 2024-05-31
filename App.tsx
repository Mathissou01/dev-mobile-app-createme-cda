import {Dimensions, StatusBar} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import SplashScreen from "@components/SplashBlock/SplashScreen";
import EStyleSheet from "react-native-extended-stylesheet";
import {useFonts} from "expo-font";
import {RootStackScreens} from "@/navigation/RootStackScreen";
import {store} from "@/store/store";
import {Provider} from "react-redux";
import {AuthProvider} from "@hooks/AuthContext";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
    const {height, width} = Dimensions.get("window");
    EStyleSheet.build({
        $contentWidth: width,
        $contentHeight: height,
    });

    // ==== TIMEOUT LOADING SCREEN ==== //
    const [isLoaded, setIsLoaded] = useState(false);
    // ===== FONT ===== //
    const [fontsLoaded] = useFonts({
        //! Main
        "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
        "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
        "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
        "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
        "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
        "Raleway-Light": require("./assets/fonts/Raleway-Light.ttf"),
        "Raleway-ExtraLight": require("./assets/fonts/Raleway-ExtraLight.ttf"),
        "Raleway-Thin": require("./assets/fonts/Raleway-Thin.ttf"),
        //* Extra
        "Blackway-Brush": require("./assets/fonts/Blackway-Brush.ttf"),
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate checking if user is logged in (e.g., check AsyncStorage, etc.)
        // For demo purpose, setting a timeout to simulate loading
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    // Effect to watch for changes in isLoggedIn state
    useEffect(() => {
        console.log("isLoggedIn changed:", isLoggedIn);
    }, [isLoggedIn]);

    if (!fontsLoaded || isLoading) {
        return <SplashScreen/>;
    }

    return (
        <AuthProvider>
            <Provider store={store}>
                <SafeAreaProvider>
                    <StatusBar backgroundColor={"white"} barStyle={"dark-content"}/>
                    <NavigationContainer>
                        <RootStackScreens/>
                    </NavigationContainer>
                </SafeAreaProvider>
            </Provider>
        </AuthProvider>
    );
}
