import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useEffect } from "react";
import Home from "../features/authenticated/components/Home";
import About from "../features/authenticated/components/About";
import Steps from "../features/authenticated/components/Steps";
import LiveData from "../features/authenticated/components/LiveData";
import Contact from "../features/authenticated/components/Contact";
import Profile from "../features/authenticated/components/Profile";

const AuthRouter = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/live-data" element={<LiveData />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default AuthRouter;
