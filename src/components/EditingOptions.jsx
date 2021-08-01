import { Flex } from "@chakra-ui/react";
import React from "react";
import Hyperlink from "./Hyperlink";
import ImageContent from "./ImageContent";
import MemeContent from "./MemeContent";
import TextStyles from "./TextStyles";

function EditingOptions({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <>
      <Flex justify="center" w="100%" align="center">
        <Flex
          mt={"2rem"}
          w={{ sm: "100%", md: "50%" }}
          justify="space-evenly"
          wrap="wrap"
          align="center"
        >
          <TextStyles editor={editor} />
          <Hyperlink editor={editor} />
          <ImageContent editor={editor} />
          <MemeContent editor={editor} />
        </Flex>
      </Flex>
    </>
  );
}

export default EditingOptions;
