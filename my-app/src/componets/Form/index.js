import React, { useState } from "react";
import { Vibration, View, Text, TextInput, TouchableOpacity, Pressable, Keyboard} from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";



export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    let heightFormat = height.replace(",",".")
    return setImc((weight / (height * height)).toFixed(2));
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
    }
    else {
      verificationImc()
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Calcular o peso e altura!");
   
    }
  }

  return (
    <Pressable onPres={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 73.500"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>

      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </Pressable>
  );
}
