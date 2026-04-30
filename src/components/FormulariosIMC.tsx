import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/appStyles";

type ResultadoType = {
  nombre: string;
  imc: string;
};

type Props = {
  setResultado: (valor: ResultadoType) => void;
};

export default function FormularioIMC({ setResultado }: Props) {
  const [nombre, setNombre] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!nombre || !peso || !altura) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      alert("Ingrese números válidos");
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

setResultado({
      nombre,
      imc: imc.toFixed(2)
    });

    // Limpiar los campos para un nuevo registro
    setNombre("");
    setPeso("");
    setAltura("");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Calculadora IMC</Text>

<TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        keyboardType="numeric"
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        value={altura}
        keyboardType="numeric"
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.boton} onPress={calcularIMC}>
        <Text style={styles.textoBoton}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
}