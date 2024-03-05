import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/" exact />
        <Route element={<Profile />} path="/profile" />
      </Route>
      <Route element={<Login />} path="/login" />
      <Route element={<Registration />} path="/register" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
