/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import StepIndicator from "./StepIndicator";
import Swiper from "react-native-swiper";
import { MaterialIcons } from "@expo/vector-icons";
import Search from "../screens/Search";
import Search2 from "../screens/Search2";
import Search3 from "../screens/Search3";
import Search4 from "../screens/Search4";
import Search5 from "../screens/Search5";
import Search6 from "../screens/Search6";
import Search7 from "../screens/Search7";
import Search8 from "../screens/Search8";
import Search9 from "../screens/Search9";
import Search10 from "../screens/Search10";

const PAGES = [
  <Search />,
  <Search2 />,
  <Search3 />,
  <Search4 />,
  <Search5 />,
  <Search6 />,
  <Search7 />,
  <Search8 />,
  <Search9 />,
  <Search10 />,
];

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: "#4aae4f",
  separatorUnFinishedColor: "#a4d4a5",
  stepIndicatorFinishedColor: "#4aae4f",
  stepIndicatorUnFinishedColor: "#a4d4a5",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 12,
  currentStepLabelColor: "#4aae4f",
};

const getStepIndicatorIconConfig = ({
  position,
  stepStatus,
}: {
  position: number;
  stepStatus: string;
}) => {
  const iconConfig = {
    name: "feed",
    color: stepStatus === "finished" ? "#ffffff" : "#fe7013",
    size: 15,
  };
  switch (position) {
    case 0: {
      iconConfig.name = "shopping-cart";
      break;
    }
    case 1: {
      iconConfig.name = "location-on";
      break;
    }
    case 2: {
      iconConfig.name = "assessment";
      break;
    }
    case 3: {
      iconConfig.name = "payment";
      break;
    }
    case 4: {
      iconConfig.name = "track-changes";
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
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
            "Etape 9",
            "Etape 10",
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
        onIndexChanged={(page) => {
          setCurrentPage(page);
        }}
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
    color: "#4aae4f",
  },
});
