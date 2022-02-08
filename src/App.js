import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import AddClient from "./Pages/AddClient";
import UpdateClient from "./Pages/UpdateClient";
import { ADD_CLIENT, UPDATE_CLIENT, HOME } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ADD_CLIENT} element={<AddClient />} />
          <Route path={`${UPDATE_CLIENT}/:id`} element={<UpdateClient />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
