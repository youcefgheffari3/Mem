import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import SignInSide from "./layouts/SignInSide";
import { Home } from "./Scenes/Home/Home";
import SignUp from "./layouts/SignUp";

import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider} from "@mui/material";

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
        
  );
}

export default App;
     {/* {isConfirm && <Dashboard />}
      {openSignup && <SignUp />}
      {openSignin && (
        <SignInSide onConfirm={setIsConfirm} openSignin={isConfirm} />
      )}
      <Home onSignIN={setOpenSignin} onSignUp={setOpenSignup} /> */}

  // const [isConfirm, setIsConfirm] = useState<boolean>(false);
  // const [openSignup, setOpenSignup] = useState<boolean>(false);
  // const [openSignin, setOpenSignin] = useState<boolean>(false);