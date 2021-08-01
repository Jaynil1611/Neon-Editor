import React from "react";
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
import { useState } from "react";
import { activeButtonProps, buttonProps } from "../utils";
import { LinkIcon } from "@chakra-ui/icons";
import { FaUnlink } from "react-icons/all";

function Hyperlink({ editor }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateLink = (url) =>
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();

  const getProps = (editor) => (editor ? activeButtonProps : {});

  return (
    <>
      <Button
        onClick={onOpen}
        {...buttonProps}
        {...getProps(editor.isActive("link"))}
        _hover={{
          backgroundColor: "none",
        }}
      >
        <LinkIcon />
      </Button>
      {editor.isActive("link") && (
        <Button
          {...buttonProps}
          {...getProps(editor.isActive("link"))}
          textDecoration="underline"
          _hover={{
            backgroundColor: "none",
          }}
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          <FaUnlink color="white" />
        </Button>
      )}
      <InsertLink isOpen={isOpen} onClose={onClose} updateLink={updateLink} />
    </>
  );
}

const InsertLink = ({ isOpen, onClose, updateLink }) => {
  const [url, setUrl] = useState("");

  const sendURL = () => {
    try {
      if (new URL(url)) {
        updateLink(url);
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
          <ModalHeader>Insert Link</ModalHeader>
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

export default Hyperlink;
