import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export default function BasicModal({isOpen, onClose}: {isOpen: boolean, onClose: any}) {
  const navigate = useNavigate();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          장바구니에 담겼습니다.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button 
            onClick={() => navigate('/cart')}
            variant='ghost'>
            go to cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}