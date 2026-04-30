import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/appStyles";

type ResultadoType = {
  nombre: string;
  imc: string;
};

type Props = {
  resultado: ResultadoType | null;
  historial: ResultadoType[];
  setHistorial: (data: ResultadoType[]) => void;
};

export default function ResultadoIMC({
  resultado,
  historial,
  setHistorial,
}: Props) {
  if (!resultado) return null;

  const imcNum = parseFloat(resultado.imc);

  const clasificacion = (imc: number) => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  const getColor = (imc: number) => {
    if (imc < 18.5) return "#3498db";
    if (imc < 25) return "#2ecc71";
    if (imc < 30) return "#f1c40f";
    return "#e74c3c";
  };

  const guardar = () => {
    setHistorial([...historial, resultado]);
  };

  const color = getColor(imcNum);

  return (
    <View style={[styles.card, { borderLeftWidth: 5, borderLeftColor: color }]}>
      <Text style={styles.titulo}>Diagnostico</Text>
      <Text style={[styles.resultado,{ color }]}>Paciente: {resultado.nombre}</Text>

      <Text style={[styles.resultado, { color }]}>IMC: {resultado.imc}</Text>

      <Text style={[styles.resultado,{ color }]}>{clasificacion(imcNum)}</Text>

      <TouchableOpacity style={styles.boton} onPress={guardar}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
