export type Diagnostico =
  | "Bajo peso"
  | "Normal"
  | "Sobrepeso"
  | "Obesidad";

export interface RegistroIMC {
  nombre: string;
  peso: number;
  altura: number;
  imc: number;
  diagnostico: Diagnostico;
}