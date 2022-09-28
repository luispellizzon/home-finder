import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/" element={<Offers />} />
          <Route path="/" element={<Profile />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
