import React from "react";
import { Fab, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";
import { ADD_CLIENT } from "../constants/routes";

const StyledFab = styled(Fab)(({theme})=>({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontSize:"12px",
  "&:hover":{
    backgroundColor:theme.palette.primary.main
  }
}));

const FloatingButton = ({ variant, onClick, ...rest }) => {
  return (
    <StyledFab
      variant="extended"
      onClick={onClick}
      component={variant === "add" ? Link : "div"}
      to={variant === "add" ? ADD_CLIENT : undefined}
      {...rest}
    >
      <Icon variant={variant} sx={{ mr: 1 }} />
      {label(variant)}
    </StyledFab>
  );
};

const Icon = ({ variant, ...rest }) => {
  switch (variant) {
    case "add":
      return <AddIcon {...rest} />;
    case "save":
      return <CheckIcon {...rest} />;
    case "return":
      return <KeyboardReturnIcon {...rest} />;

    default:
      return <AddIcon {...rest} />;
  }
};

const label = (variant) => {
  switch (variant) {
    case "add":
      return "Ajouter un client";
    case "save":
      return "Enregistrer";
    case "return":
      return "Retour";

    default:
      return "Ajouter un client";
  }
};

export default FloatingButton;
