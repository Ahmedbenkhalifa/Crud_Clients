import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary:{main:"rgb(66,63,110)"},
    secondary:{main:"#ffffff"},
    background: {
      default: "#211F3B",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  // components: {
  //   MuiTextField: {
  //     styleOverrides: {
  //       // Name of the slot
  //       root: {
  //         padding: '10px 12px',
  //       },
  //     },
  //   },
  // },
});
export default theme;
