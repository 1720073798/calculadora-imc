import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/appStyles";

type ResultadoType = {
  nombre: string;
  imc: string;
};

type Props = {
  historial: ResultadoType[];
  setHistorial: (data: ResultadoType[]) => void;
};

export default function HistorialIMC({ historial, setHistorial }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Historial</Text>

      {historial.map((item, index) => (
        <Text key={index}>
          {item.nombre} - IMC: {item.imc}
        </Text>
      ))}

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setHistorial([])}
      >
        <Text style={styles.textoBoton}>Limpiar</Text>
      </TouchableOpacity>
    </View>
  );
}