import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 30,
  },

  formLabel: {
    color: "#000000",
    fontSize: 20,
    paddingLeft: 10,
  },

  formInput: {
    width: "100%",
    height: 40,
    paddingLeft: 10,
    margin: 12,
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    fontSize: 24,
  },

  buttonCalculator: {
    width: "90%",
    height: 50,
    borderRadius: 50,
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 10,
    marginTop: 30,
    backgroundColor: "#ff0043",
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonCalculator: {
    fonteSize: 30,
    color: "#fff",
  },

  errorMessage: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default styles;