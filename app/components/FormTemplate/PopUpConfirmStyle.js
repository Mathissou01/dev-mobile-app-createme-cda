import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  darkBlurContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    flex: 1,
    height: "100%",
    width: "100%",
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    height: 300,
  },
  messageText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  okButton: {
    padding: 5,
    borderRadius: 5,
  },
  okButtonText: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 24,
  },
  loaderContent: {
    height: 150,
    width: 150,
  },
  blurContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});

export default styles;
