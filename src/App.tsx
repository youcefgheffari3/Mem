import { useState } from "react";
import Dashboard from "./Dashboard";
import SignInSide from "./SignInSide";
import { Home } from "./Home";
import SignUp from "./SignUp";

function App() {
  const [visiblity, setVisibility] = useState(false);
  const [visib, setVisib] = useState(false);
  const [visibe, setVisibe] = useState(false);

  return (
    <>
      {visib && <SignUp />}
      {visibe && <SignInSide onConfirm={() => setVisibility(true)} />}
      {visiblity && <Dashboard />}
      <Home onSignIN={() => setVisibe(true)} onSignUp={() => setVisib(true)} />
    </>
  );
}

export default App;
