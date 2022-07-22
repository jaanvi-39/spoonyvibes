import NavBar from "./components/NavBar";
import { AppStyles } from "./components/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
// import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AppStyles />
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/profile" exact element={<Profile />}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
