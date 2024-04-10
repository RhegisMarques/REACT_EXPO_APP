import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    width: "100%",
    marginTop: 15,
    paddingTop: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  numberImc: {
    fontSize: 25,
    color: "#990029",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  information: {
    fontSize: 18,
    color: "#990029",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },

  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },

  sharedText: {
    color: "#ffffff",
    paddingHorizontal: 30,
    fontWeight: "bold",
  },
});

export default styles;
