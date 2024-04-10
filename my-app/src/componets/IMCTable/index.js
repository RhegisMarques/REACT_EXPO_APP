import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./style";

const IMCTable = () => {
  const data = [
    { resultado: "Muito abaixo do peso", situacao: "Abaixo de 17" },
    { resultado: "Abaixo do peso", situacao: "Entre 17 e 18,49" },
    { resultado: "Peso normal", situacao: "Entre 18,5 e 24,99" },
    { resultado: "Acima do peso", situacao: "Entre 25 e 29,99" },
    { resultado: "Obesidade I", situacao: "Entre 30 e 34,99" },
    { resultado: "Obesidade II (severa)", situacao: "Entre 35 e 39,99" },
    { resultado: "Obesidade III (mórbida)", situacao: "Acima de 40" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Classificação do IMC</Text>
      <View style={styles.table}>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.situacao}>{item.situacao}</Text>
            <Text style={styles.resultado}>{item.resultado}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};


