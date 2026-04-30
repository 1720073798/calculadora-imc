import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/appStyles";

type Props = {
  setResultado: (valor: string) => void;
};

export default function FormularioIMC({ setResultado }: Props) {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!peso || !altura) {
      alert("Campos vacíos");
      return;
    }

    if (pesoNum <= 0 || pesoNum > 500) {
      alert("Peso inválido");
      return;
    }

    if (alturaNum <= 0 || alturaNum > 3) {
      alert("Altura inválida");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(2));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Calculadora IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.boton} onPress={calcularIMC}>
        <Text style={styles.textoBoton}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
}