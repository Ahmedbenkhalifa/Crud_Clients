import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField, useMediaQuery } from "@mui/material";

const SearchBar = ({ searchTerm, handleSearchTerm, ...rest }) => {
  const isMobile = useMediaQuery("(max-width:530px)");
  return (
    <TextField
      {...rest}
      color="secondary"
      label="Rechercher"
      variant="outlined"
      value={searchTerm}
      fullWidth={isMobile}
      sx={{ mr: isMobile ? 0 : 2, mb: isMobile ? 3 : 0 }}
      onChange={(e) => handleSearchTerm(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
