import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./src/styles/appStyles";
import HistorialIMC from "./src/components/HistoricoIMC";
import ResultadoIMC from "./src/components/ResultadoIMC";
import FormularioIMC from "./src/components/FormulariosIMC";


export default function App() {
  const [resultado, setResultado] = useState<string | null>(null);
  const [historial, setHistorial] = useState<string[]>([]);

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