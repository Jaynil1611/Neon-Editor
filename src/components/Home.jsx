import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import EditingOptions from "./EditingOptions";
import { Box, Flex, Image as DisplayImage, Text } from "@chakra-ui/react";

function Home() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link, Image, Placeholder],
    autofocus: "end",
  });

  return (
    <>
      <Box w="100%" m="auto" maxW={{ md: "70vw" }} fontSize="1.2rem">
        <Flex mt={"2rem"} w="100%" justify="center" align="center">
          <DisplayImage
            w="3rem"
            h="3rem"
            style={{
              borderRadius: "100%",
            }}
            boxShadow="lg"
            rounded="full"
            boxSize="100px"
            src={
              "https://raw.githubusercontent.com/Jaynil1611/Coding-Archives/master/neon.jpg"
            }
            alt="Neon Editor"
          />
          <Text mx={8} fontSize="x-large" fontFamily="cursive">
            Neon Editor
          </Text>
        </Flex>
        <EditingOptions editor={editor} />
        <EditorContent className="editor" editor={editor} />
      </Box>
    </>
  );
}

export default Home;
