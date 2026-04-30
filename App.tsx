import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import ResultadoIMC from "./src/components/ResultadoIMC";
import { styles } from "./src/styles/appStyles";
import FormularioIMC from "./src/components/FormulariosIMC";
import HistorialIMC from "./src/components/HistoricoIMC";

type ResultadoType = {
  nombre: string;
  imc: string;
};

export default function App() {
  const [resultado, setResultado] = useState<ResultadoType | null>(null);
  const [historial, setHistorial] = useState<ResultadoType[]>([]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <FormularioIMC setResultado={setResultado} />

        <ResultadoIMC
          resultado={resultado}
          historial={historial}
          setHistorial={setHistorial}
        />

        <HistorialIMC historial={historial} setHistorial={setHistorial} />
      </View>
    </ScrollView>
  );
}