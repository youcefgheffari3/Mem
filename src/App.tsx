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
    <div>
      {openSignup && <SignUp />}
      {openSignin && <SignInSide onConfirm = {setIsConfirm}  openSignin={isConfirm} />}
      {isConfirm && <Dashboard />}
      <Home onSignIN={setOpenSignin}  onSignUp={setOpenSignup} />
    </div>
  );
}

export default App;
