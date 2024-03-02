import React, { useState } from "react";
import { Button } from "@mui/material";

type colorType =
  | "error"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "inherit"
  | undefined;

type Props = {
  tag: string;
  removeTag: (tag: string) => void;
};

const Tag: React.FC<Props> = ({ tag, removeTag }) => {
  const [color, setColor] = useState<colorType>("primary");
  return (
    <Button
      variant="contained"
      color={color}
      onMouseEnter={() => setColor("error")}
      onMouseLeave={() => setColor("primary")}
      onClick={() => removeTag(tag)}
    >
      {tag}
    </Button>
  );
};

export default Tag;
