import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    backgroundColor: "#000",
    alignItems: "center",
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 5,
  },

  form: {
    width: "100%",
    height: "auto",
    padding: 10,
  },

  formLabel: {
    color: "#000000",
    fontSize: 25,
    paddingLeft: 10,
    color: "white",
  },

  formInput: {
    width: "100%",
    height: 40,
    paddingLeft: 10,
    marginRight: 12,
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    fontSize: 15,
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