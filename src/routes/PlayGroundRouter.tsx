import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import GuestRouter from "./GuestRouter";
import LandingPage from "../components/utilityComponents/LandingPage";
import { AuthProvider } from "../features/auth/contexts/AuthContext";

const PlayGroundRouter = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <LandingPage />
            </AuthProvider>
          }
        />
        {token ? (
          <Route path="/*" element={<AuthRouter />} />
        ) : (
          <Route path="/*" element={<GuestRouter />} />
        )}
      </Routes>
    </>
  );
};

export default PlayGroundRouter;
