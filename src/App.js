import React from "react";

// importing MUI components
import { createTheme } from "@mui/material/styles";


//importing components
import Header from "./components/header.js";
import Banner from "./components/banner"
import MuhammadDanish from "./components/muhammadDanish"
import OtherZnappers from './components/otherZnappers'


// Custom theme
export const theme = createTheme({
  palette: {
    primary: {
      light : "#fff",
      main: '#5bbc2f',
      dark: "#f3f3f3",
      contrastText: "#161c20",
              dark: "#444 "
    },
    background: {
      light : "#fff",
      main: '#5bbc2f',
      dark: "#f3f3f3",
      contrastText: "#161c20",
    },
    color: {
      primary: {
        light: "#fff",
        main: "#222",
        dark: "#444 "
      }
    },
  },
});

function App() {
  return (
        <div className="App">
          <Header />
          <Banner />
          <MuhammadDanish />
          <OtherZnappers />
        </div>
  );
}

export default App;
