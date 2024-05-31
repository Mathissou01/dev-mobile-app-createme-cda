import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { SLIDE_HEIGHT } from "../../components/Auth/onBoardBlock/Slide";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    height: SLIDE_HEIGHT,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: -10,
    paddingBottom: 30,
    marginTop: 10,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default styles;
