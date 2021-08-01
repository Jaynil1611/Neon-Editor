import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { activeButtonProps, buttonProps } from "../utils";

function TextStyles({ editor }) {
  return (
    <>
      <StyleButton
        handler={() => editor.chain().focus().toggleBold().run()}
        editor={editor}
        name="bold"
      />
      <StyleButton
        handler={() => editor.chain().focus().toggleItalic().run()}
        editor={editor}
        name="italic"
      />
      <StyleButton
        handler={() => editor.chain().focus().toggleUnderline().run()}
        editor={editor}
        name="underline"
      />
    </>
  );
}

const StyleButton = ({ name, handler, editor }) => {
  const getProps = (editor) => (editor ? activeButtonProps : {});

  const getButtonText = (name) => name.slice(0, 1).toUpperCase();

  return (
    <Button
      onClick={handler}
      {...buttonProps}
      {...getProps(editor.isActive(name))}
      _hover={{
        backgroundColor: "none",
      }}
    >
      <Text textDecoration={name === "underline" ? name : "none"}>
        {getButtonText(name)}
      </Text>
    </Button>
  );
};

export default TextStyles;
