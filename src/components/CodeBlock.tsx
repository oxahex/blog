import React from "react";
import { ComponentDefaultProps, Text } from "@chakra-ui/react";
import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const parseClassName = (className: string) => {
  const [, addLineString, removeLineString] = className?.split(",");
};

const CodeBlock = ({ children, className }: ComponentDefaultProps) => {
  const language = /language-(\w+)/.exec(className || "");

  console.log(language);

  if (!language) {
    return (
      <Text
        as="code"
        sx={{
          _after: {
            content: '"`"',
          },
          _before: {
            content: '"`"',
          },
          color: "gray.900",
          letterSpacing: "-0.04px",
          fontWeight: "600",
        }}
      >
        {children}
      </Text>
    );
  } else {
    return (
      <Prism
        style={vscDarkPlus}
        customStyle={{ margin: "10px 0", borderRadius: "5px" }}
        showLineNumbers
        language={language[1]}
        wrapLines
      >
        {String(children).replace(/\n$/, "")}
      </Prism>
    );
  }
};

export default CodeBlock;
