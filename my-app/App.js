import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Title from "./src/componets/Title";
import Form from "./src/componets/Form";
import IMCTable from "./src/componets/IMCTable";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title />
      <Form />
      <IMCTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 80,
  },
});
