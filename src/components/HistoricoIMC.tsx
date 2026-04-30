import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/appStyles";

type Props = {
  historial: string[];
  setHistorial: (data: string[]) => void;
};

export default function HistorialIMC({ historial, setHistorial }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Historial</Text>

      {historial.map((item, index) => (
        <Text key={index}>IMC: {item}</Text>
      ))}

      <TouchableOpacity style={styles.boton} onPress={() => setHistorial([])}>
        <Text style={styles.textoBoton}>Limpiar</Text>
      </TouchableOpacity>
    </View>
  );
}