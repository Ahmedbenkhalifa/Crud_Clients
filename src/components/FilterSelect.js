import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import _ from "lodash";
import { useMediaQuery } from "@mui/material";

export default function BasicSelect({filter,setFilter}) {
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
    <FormControl sx={{ minWidth: "215px" }} color="secondary" fullWidth={isMobile}>
      <InputLabel id="select-label">Sélectionner un filtre</InputLabel>
      <Select
        labelId="select-label"
        id="demo-simple-select"
        value={filter}
        label="Sélectionner un filtre"
        onChange={handleChange}
      >
        <MenuItem value="">Aucun filtre</MenuItem>
        {filters.map((elem,k) => (
          <MenuItem key={k} value={elem}>{_.upperFirst(elem)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
