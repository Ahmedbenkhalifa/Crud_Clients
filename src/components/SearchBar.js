import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  InputBase,
  styled,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const StyledSearchInput = styled("input")({});

const SearchBar = ({ searchTerm, handleSearchTerm, ...rest }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:530px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        p: 1,
        minWidth: "220px",
        width:"60%",
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor:"#3C3957",
        borderRadius:'30px',
        mr:1
      }}
    >
      <SearchIcon sx={{mx:1,color:"rgb(170,170,170)"}} />
      <InputBase placeholder="recherche" value={searchTerm} sx={{width:"100%"}} onChange={(e) => handleSearchTerm(e.target.value)}/>
    </Box>
  );
};

export default SearchBar;
