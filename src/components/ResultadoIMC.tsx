import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/appStyles";

type Props = {
  resultado: string | null;
  historial: string[];
  setHistorial: (data: string[]) => void;
};

export default function ResultadoIMC({ resultado, historial, setHistorial }: Props) {

  const clasificacion = (imc: number): string => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const guardar = () => {
    if (resultado) {
      setHistorial([...historial, resultado]);
    }
  };

  if (!resultado) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.resultado}>IMC: {resultado}</Text>
      <Text>{clasificacion(parseFloat(resultado))}</Text>

      <TouchableOpacity style={styles.boton} onPress={guardar}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}