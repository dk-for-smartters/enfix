import * as React from "react";
import Avatar from "@mui/material/Avatar";

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "#FFF3C8",
      color: "#FFD12E",
      width: 100,
      height: 100,
      fontSize: 55,
    },
    children: `${name[0]}`,
  };
}

export default function InitialLettersAvatar({ name }: { name: string }) {
  return <Avatar {...stringAvatar(name)} />;
}
