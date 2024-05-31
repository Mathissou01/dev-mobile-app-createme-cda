import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  notifForm: {
    marginTop: 20,
    backgroundColor: "transparent",
    "@media (max-height: 670)": {
      marginTop: 0,
      marginBottom: 20,
    },
  },
  horizontalSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 45,
    backgroundColor: "transparent",
  },
  contentSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  textSection: {
    width: "75%",
    backgroundColor: "transparent",
  },
  icon: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "transparent",
  },
  line: {
    width: "80%",
    height: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 15,
    "@media (max-height: 600)": {
      fontSize: 13,
    },
  },
  subtitle: {
    fontSize: 11,
    "@media (max-height: 600)": {
      fontSize: 9,
    },
  },
});

export default styles;
