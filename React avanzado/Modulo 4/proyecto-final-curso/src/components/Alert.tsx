import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/modal";
  
  import { useAlertContext } from "../context/AlertContext";
  import { useRef } from "react";
  
  function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext();
    const cancelRef = useRef<HTMLButtonElement>(undefined);
    const isSuccess:boolean = type === "success"
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccess ? 'All good!' : 'Oops!'}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  };
  
  export default Alert;
  