import { StyleSheet, Text } from "react-native";

const Texto = ({ children, style }) => {
  let estilo = estilos.textoRegular;

  if (style?.fontWeight === "bold") {
    estilo = estilos.textoNegrito;
  };

  return (
    <Text style={[style, estilo]}>{children}</Text>
  );
};

const estilos = StyleSheet.create ({
  textoRegular: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
})

export default Texto;
