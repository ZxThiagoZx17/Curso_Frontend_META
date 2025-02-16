import * as React from "react";
import { VStack, BoxProps } from "@chakra-ui/react";

interface FullScreenSectionProps extends BoxProps {
  children: React.ReactNode;
  isDarkBackground?: boolean; // Opcional con ?
}

const FullScreenSection: React.FC<FullScreenSectionProps> = ({ 
  children, 
  isDarkBackground = false, // Valor por defecto
  ...boxProps 
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
