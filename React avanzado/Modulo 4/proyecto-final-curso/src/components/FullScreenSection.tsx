import * as React from "react";
import { VStack, BoxProps } from "@chakra-ui/react";

// extends BoxProps se puede decir como: "A FullScreenSectionProps agrégale todas las props de BoxProps".
interface FullScreenSectionProps extends BoxProps {
  children: React.ReactNode;
  isDarkBackground?: boolean; // Opcional con ?, significa que la prop puede estar presente o no
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({ 
  children, 
  isDarkBackground = false, // Valor por defecto
  ...boxProps //Se puede explicar como "todo lo que no sea children o isDarkBackground, agrégalo aquí".
}) => {

    // Extraemos 'direction' para que no se pase a VStack ya que es incopatible
    // const {direction, ...filteredBoxProps } = boxProps;

  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
