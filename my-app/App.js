import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./src/componets/Title";
import Form from "./src/componets/Form";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 250,
  },
});
