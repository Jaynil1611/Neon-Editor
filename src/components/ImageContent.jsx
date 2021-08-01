import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { PrimaryButton } from "../utils";

function ImageContent({ editor }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateImage = (url) =>
    editor.chain().focus().setImage({ src: url }).run();

  return (
    <>
      <PrimaryButton onClick={onOpen}>Insert Image</PrimaryButton>
      <InsertImage
        isOpen={isOpen}
        onClose={onClose}
        updateImage={updateImage}
      />
    </>
  );
}

const InsertImage = ({ isOpen, onClose, updateImage }) => {
  const [url, setUrl] = useState("");

  const sendURL = () => {
    try {
      if (new URL(url)) {
        updateImage(url);
        onClose();
      }
    } catch (error) {
      alert("URL is invalid!");
    }
  };

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Insert Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="url" onChange={(e) => setUrl(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={sendURL}>
              Add
            </Button>
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageContent;
