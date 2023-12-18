import "./App.css";
import AuthDetails from "./components/auth/AuthDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

export default function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}
