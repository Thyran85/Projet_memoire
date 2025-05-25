import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientRouter from "./pages/client/router";
import AdminRouter from "./pages/admin/router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/client/*" element={<ClientRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="*" element={<ClientRouter />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;