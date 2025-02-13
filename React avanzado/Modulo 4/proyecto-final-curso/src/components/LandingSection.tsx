import { Heading, VStack } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import FullScreenSection from "./FullScreenSection";

const greeting:string = "Hello, I am Pete!";
const bio1:string = "A frontend developer";
const bio2:string = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack gap={16}>
      <VStack gap={4}>
        <Avatar src="https://i.pravatar.cc/150?img=7" size="2x1" />
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack gap={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>  
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
