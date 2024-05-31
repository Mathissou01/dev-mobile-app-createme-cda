import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import HorizontalStepIndicator from "@components/HorizontalStepIndicator";

export default function Favorites() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <HorizontalStepIndicator currentPage={currentPage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 16,
  },
  buttonContainer: {
    flexShrink: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selected: {
    backgroundColor: "rgb(101, 121, 191)",
  },
  unSelected: {
    backgroundColor: "rgba(101, 121, 191, 0.3)",
  },
  buttonLabel: {
    color: "#ffffff",
  },
});
