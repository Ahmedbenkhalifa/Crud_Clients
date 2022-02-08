import { Box } from "@mui/system";
import React from "react";

const ContainerFloatingAction = ({ children }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "20px",
        right: "50px",
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerFloatingAction;
