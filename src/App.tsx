import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomeScreen";
import HTMLRenderer from "./pages/prueba.tsx";
import LoginScreen from "./pages/dashboard/Home";
import MainDashboard from "./pages/dashboard/Home";
import AccountsPage from "./pages/dashboard/Accounts.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HTMLRenderer />} />
        <Route path="/portal/" element={<MainDashboard />} />
        <Route path="/portal/accounts" element={ <AccountsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
