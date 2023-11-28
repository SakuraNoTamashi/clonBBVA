import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import HTMLRenderer from "./pages/prueba.jsx";

import MainDashboard from "./pages/dashboard/Home";
import AccountsPage from "./pages/dashboard/Accounts.tsx";

import AccountMovementsPage from "./pages/dashboard/AccountMovements.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HTMLRenderer />} />
        <Route path="/portal" element={<MainDashboard />} />
        <Route path="/portal/accounts" element={<AccountsPage />} />
        <Route path="/portal/details" element={ <AccountMovementsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
