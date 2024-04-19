import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OtpPage from "./Pages/OtpPage";
import ProductPage from "./Components/ProductPage";
import Profile from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpPage" element={<OtpPage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
