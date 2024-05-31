import {useEffect, useState} from "react";
import {HomeTabs} from "@/navigation/HomeTabs";
import LoginScreen from "@screens/Auth/LoginScreen";

export const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in (e.g., AsyncStorage, etc.)
        // For demo purpose, setting a timeout to simulate loading
        const timeout = setTimeout(() => {
            setIsLoggedIn(true); // Set to true if user is logged in, false otherwise
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return isLoggedIn ? <HomeTabs /> : <LoginScreen />;
};
