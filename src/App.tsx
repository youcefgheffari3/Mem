import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import SignInSide from "./layouts/SignInSide";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [openSignup, setOpenSignup] = useState<boolean>(false);
  const [openSignin, setOpenSignin] = useState<boolean>(false);

  return (
    <>
    
      {isConfirm && <Dashboard />}
      {openSignup && <SignUp />}
      {openSignin && (
        <SignInSide onConfirm={setIsConfirm} openSignin={isConfirm} />
      )}
      <Home onSignIN={setOpenSignin} onSignUp={setOpenSignup} />
    </>
  );
}

export default App;
