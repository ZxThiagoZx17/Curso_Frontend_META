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
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
