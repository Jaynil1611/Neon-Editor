import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  IconButton,
  VStack,
  Text,
  Button,
  Link,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import { BiHelpCircle } from "react-icons/all";
import { buttonProps } from "../utils";

function Help() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        mt={"0.5rem"}
        backgroundColor="gray.300"
        _hover={{
          backgroundColor: "none",
        }}
        _focus={{
          outline: "none",
        }}
      >
        <BiHelpCircle size="1.5rem" />
      </IconButton>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent
          wordBreak="break-word"
          width={"600px"}
          height="80vh"
          overflow="auto"
          borderRadius="1rem"
        >
          <ModalHeader fontSize="1.8rem">Neon Editor Guidelines</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={"1rem"} align="center" justify="center">
              <Text>
                <b> Bold Styling </b> Click on <OutlineButton>B</OutlineButton>
                button & start typing. To add/remove bold styling to exisitng
                text, select text & click on <OutlineButton> B</OutlineButton>
                button.
              </Text>
              <Text>
                <b> Italic Styling </b>
                Click on <OutlineButton>I</OutlineButton> button & start typing.
                To add/remove italic styling to exisitng text, select text &
                click on <OutlineButton>I</OutlineButton> button.
              </Text>
              <Text>
                <b> Underline Styling </b>
                Click on{" "}
                <OutlineButton>
                  <ins>U</ins>
                </OutlineButton>
                button & start typing. To add/remove underline styling to
                exisitng text, select text & click on{" "}
                <OutlineButton>
                  <ins>U</ins>
                </OutlineButton>{" "}
                button.
              </Text>
              <Text>
                <b>Link Styling</b> To add a hyperlink to existing text, select
                the text, click on the 🔗 button & enter the link URL in opened
                modal. Please make{" "}
                <Link color="orange.500" href="https://github.com/g">
                  https://github.com/
                </Link>{" "}
                sure you are entering a valid link URL e.g.
                <br />
                To remove the link, select the text & click on the 🔗 button.
              </Text>
              <Text>
                <b>Images</b> To insert an image, click on Insert Image button &
                enter image url in opened modal. To delete an image, click on
                the image & press the delete/backspace button on the keyboard.
                For Testing: Try this image URL-
                <Link
                  color="orange.500"
                  href="https://raw.githubusercontent.com/Jaynil1611/Coding-Archives/master/neon.jpg"
                >
                  https://raw.githubusercontent.com/Jaynil1611/Coding-Archives/master/neon.jpg
                </Link>
                <br />
                To reorder your images in the text editor, just drag & drop
                images anywhere in the editor.
              </Text>
              <Text>
                <b>Memes</b> To insert a meme, type yourDesiredMeme_meme inside
                double braces, click on Insert Meme button, then yourDesiredMeme
                GIF will get added to the editor. To delete meme, click on the
                image & press delete/backspace button on keyboard.
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const OutlineButton = ({ children }) => (
  <Button
    {...buttonProps}
    m="0"
    _hover={{
      backgroundColor: "none",
    }}
  >
    {children}
  </Button>
);

export default Help;
