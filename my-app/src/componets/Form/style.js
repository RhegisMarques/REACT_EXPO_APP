import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex:1,
    justifyContent: "space-around",
    backgroundColor: "#000000",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 25,
    
  },

  form: {
    width: "100%",
  },

  formLabel: {
    color: "#000000",
    fontSize: 25,
    paddingLeft: 20,
    color: "white",
    
  },

  formInput: {
    width: "90%",
    height: 50,
    paddingLeft: 20,
    borderRadius: 20,
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 10,
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
    backgroundColor: "#990029",
    alignItems: "center",
    justifyContent: "center",
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },

  errorMessage: {
    fontSize: 14,
    color: "#990029",
    fontWeight: "bold",
    paddingLeft: 10,
  },
});

export default styles;