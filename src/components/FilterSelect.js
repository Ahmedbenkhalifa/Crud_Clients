import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import _ from "lodash";
import { InputBase, styled, useMediaQuery } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const StyledSelect = styled(Select)({
  borderRadius: "30px",
  fontSize:"14px",
  textAlign:"center",
  "&:focus": {
    border: "none",
  },
});

export default function BasicSelect({ filter, setFilter }) {
  const handleChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  const clients = useSelector((state) => state.clients);
  const filters = _.uniq(
    clients.map((elem) => elem.region.trim().toLowerCase())
  );

  const isMobile = useMediaQuery("(max-width:530px)");

  return (
    <FormControl
      sx={{ minWidth: "215px" }}
      color="secondary"
      fullWidth={isMobile}
    >
      <StyledSelect
        displayEmpty
        value={filter}
        onChange={handleChange}
        sx={{
          backgroundColor: "#333058",
        }}
      >
        <MenuItem
          disabled
          value=""
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FilterAltIcon  sx={{mr:1}} />
            <div>Sélectionnez un filtre</div>
          </Box>
        </MenuItem>
        {/* <MenuItem value="">Aucun filtre</MenuItem> */}
        {filters.map((elem, k) => (
          <MenuItem key={k} value={elem}>
            {_.upperFirst(elem)}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
}
