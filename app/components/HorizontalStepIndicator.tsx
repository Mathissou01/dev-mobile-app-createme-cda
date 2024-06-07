import * as React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import StepIndicator from "./StepIndicator";
import Swiper from "react-native-swiper";
import Step from "../screens/Step";
import Step1 from "@/screens/Step1";
import Step2 from "@/screens/Step2";
import Step3 from "@/screens/Step3";
import Step4 from "@/screens/Step4";
import Step5 from "@/screens/Step5";
import Step6 from "@/screens/Step6";
import Step0 from "@/screens/Step0";

const PAGES = [
  <Step />,
  <Step0 />,
  <Step1 />,
  <Step2 />,
  <Step3 />,
  <Step4 />,
  <Step5 />,
  <Step6 />,
];

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#EF233C",
  separatorUnFinishedColor: "#CD0025",
  stepIndicatorFinishedColor: "#EF233C",
  stepIndicatorUnFinishedColor: "#FF5A7E",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 12,
  currentStepLabelColor: "#EF233C",
};

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  const renderViewPagerPage = (data: any, index: number) => {
    return (
      <View key={index} style={styles.page}>
        {data}
      </View>
    );
  };

  const renderLabel = ({
    position,
    label,
    currentPosition,
  }: {
    position: number;
    stepStatus: string;
    label: string;
    currentPosition: number;
  }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={[
            "Etape 1",
            "Etape 2",
            "Etape 3",
            "Etape 4",
            "Etape 5",
            "Etape 6",
            "Etape 7",
            "Etape 8",
          ]}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>
      <Swiper
        style={{ flexGrow: 1 }}
        loop={false}
        index={currentPage}
        autoplay={false}
        showsButtons
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
        onIndexChanged={(page) => {
          setCurrentPage(page);
        }}
        loadMinimalLoader
      >
        {PAGES.map((page) => renderViewPagerPage(page))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepIndicator: {
    marginVertical: 10,
  },
  page: {
    flex: 1,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#999999",
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#EF233C.",
  },
  buttonText: {
    color: "#ff0000",
    fontSize: 60,
    fontWeight: "bold",
  },
});
