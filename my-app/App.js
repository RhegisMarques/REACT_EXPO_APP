
import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Home, ResultScreen } from "./Screens";

// import Title from "./src/componets/Title";
// import Form from "./src/componets/Form";
// import IMCTable from "./src/componets/IMCTable";

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar style="auto" />
//       <Title />
//       <Form />
//       <IMCTable />
//     </ScrollView>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     paddingTop: 80,
//   },
// });

export default App;