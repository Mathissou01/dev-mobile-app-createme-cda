import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const App = () => {
  useEffect(() => {
    // Vous pouvez ajouter des actions supplémentaires ici
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../../assets/json/splash.json")}
        style={styles.lottie}
        autoPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 800, // ajustez la largeur comme nécessaire
    height: 800, // ajustez la hauteur comme nécessaire
  },
});

export default App;
