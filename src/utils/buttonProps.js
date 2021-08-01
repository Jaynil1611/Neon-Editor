import { Button } from "@chakra-ui/react";

export const buttonProps = {
  marginRight: "0.5rem",
  padding: "0.2rem 1rem",
  borderRadius: "0.3rem",
  border: "none",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "0.9rem",
  marginTop: "0.5rem",
  display: "inline-block",
  outline: "none",
  backgroundColor: "var(--chakra-colors-gray-300)",
};

export const inactiveButtonProps = {
  backgroundColor: "var(--chakra-colors-gray-400)",
};

export const activeButtonProps = {
  backgroundColor: "var(--chakra-colors-gray-800)",
  color: "white",
};

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      {...buttonProps}
      backgroundColor="orange.600"
      color="white"
      _hover={{ outline: "none", backgroundColor: "none" }}
      _focus={{
        outline: "none",
      }}
      _active={{
        backgroundColor: "none",
      }}
    >
      {children}
    </Button>
  );
};
