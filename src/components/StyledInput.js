import React from "react";
import { Box, Divider, InputBase, Typography } from "@mui/material";

const StyledInput = ({ label, error, helperText, ...rest }) => {
  return (
    <Box sx={{mb: 2,}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 3,
          border: error ? "1px solid red" : "1px solid rgb(51,55,103)",
          borderRadius: "30px",
          mb: helperText ? 1 : 0,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "rgb(170,170,170)", width: "10%" }}
        >
          {label}
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mx: 1 }}
        />
        <InputBase sx={{ backgroundColor:"transparent", color: helperText ? "red" : "white" }} {...rest} />
      </Box>
      {helperText && (
        <Typography variant="body2" sx={{ color: "red",ml:2 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default StyledInput;
