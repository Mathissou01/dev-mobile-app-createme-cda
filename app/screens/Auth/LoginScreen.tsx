import React, {useState} from "react";
import {Image, KeyboardAvoidingView, Platform, TouchableOpacity,} from "react-native";
// import { useAuth } from "@hooks/AuthContext";
import {Text, View} from "@components/Themed";
import LabelTemplate from "@components/FormTemplate/LabelTemplate";
import InputTemplate from "@components/FormTemplate/InputTemplate";
import useColorScheme from "@hooks/useColorScheme";
import styles from "./LoginScreenStyle.js";

export default function LogInScreen({
                                        route,
                                    }: RootTabScreenProps<"LogIn">): React.JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const { login } = useAuth();
    const colorSchema = useColorScheme();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // Static data
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const placeholder = {
        emailph: "prenom.nom@next-u.fr",
        passwordph: "e.g., •••••••",
    };

    // const handleLogin = () => {
    //   login(); // Appel de la fonction login du contexte d'authentification
    // };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container]}
        >
            <View style={styles.main_container}>
                <View style={styles.main_info_container}>
                    <View style={[styles.logoContainer]}>
                        <Image
                            style={styles.robotImage}
                            source={require("../../../assets/menu-icon.png")}
                        />
                    </View>

                    <View style={styles.InputContainer}>
                        <LabelTemplate name={"Email"} required={false} isDefault={true}/>
                        <InputTemplate
                            value={username}
                            placeholder={placeholder.emailph}
                            onChangeText={(val: string) => {
                                setUsername(val.trim());
                            }}
                            secureTextEntry={false}
                            multiline={false}
                            regex={emailRegex}
                            hasToBeChecked={false}
                        />
                    </View>

                    <View style={styles.InputContainer}>
                        <LabelTemplate
                            name={"Mot de passe"}
                            required={false}
                            isDefault={true}
                        />
                        <InputTemplate
                            value={password}
                            placeholder={placeholder.passwordph}
                            onChangeText={(val: string) => {
                                setPassword(val.trim());
                            }}
                            secureTextEntry={true}
                            showPassword={isPasswordVisible}
                            switchPasswordVisibility={() => {
                                setIsPasswordVisible(!isPasswordVisible);
                            }}
                            multiline={false}
                            hasToBeChecked={false}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={handleLogin}
                    >
                        <Text bold style={styles.text}>
                            Connexion
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: "transparent",
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={styles.secondAction}
                                lightColor="rgba(0,0,0,0.8)"
                                darkColor="rgba(255,255,255,0.8)"
                            >
                                Mot de passe oublié ?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text
                                style={styles.secondAction}
                                lightColor="rgba(0,0,0,0.8)"
                                darkColor="rgba(255,255,255,0.8)"
                            >
                                Où suis-je ?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
