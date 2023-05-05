import { Outlet } from "react-router-dom";
//import Login from "./components/Login/login";
//import Profile from "./components/Profile/profile";

// This component will serve as the outlet for diffrent routes

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
//export default App;