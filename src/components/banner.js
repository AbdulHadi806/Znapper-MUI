import React from "react";

// MUI
import { useTheme,Box } from "@mui/material";

export default function Banner() {
  const theme = useTheme();
  return (
    <>
    <Box
        component="img"
        sx={{
        width: '100%'
        }}
        alt="The house from the offer."
        src="/images/banner-image.png"
      />
    </>
  ); 
}
