import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./Dashboard";
import Categories from "./Categories";
import Recipes from "./Recipes";
import Users from "./Users";
import Admins from "./Admins";
import ContentModeration from "./ContentModeration";
import AccountSettings from "./AccountSettings";
import NutritionalStats from "./NutritionalStats";
import SearchFilters from "./SearchFilters";
import { useAuth } from "../../context/AuthContext";

const AdminRouter = () => {
  const { isLoggedIn, userType } = useAuth();

  return (
    <Routes>
      {/* Route publique pour le login admin */}
      <Route
        path="/login"
        element={
          isLoggedIn && userType === "admin" ? <Navigate to="/admin/dashboard" /> : <Login />
        }
      />

      {/* Routes protégées pour les admins */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn && userType === "admin" ? (
            <Dashboard />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/categories"
        element={
          isLoggedIn && userType === "admin" ? (
            <Categories />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/recipes"
        element={
          isLoggedIn && userType === "admin" ? (
            <Recipes />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/users"
        element={
          isLoggedIn && userType === "admin" ? (
            <Users />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/admins"
        element={
          isLoggedIn && userType === "admin" ? (
            <Admins />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/content-moderation"
        element={
          isLoggedIn && userType === "admin" ? (
            <ContentModeration />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/account-settings"
        element={
          isLoggedIn && userType === "admin" ? (
            <AccountSettings />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/nutritional-stats"
        element={
          isLoggedIn && userType === "admin" ? (
            <NutritionalStats />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route
        path="/search-filters"
        element={
          isLoggedIn && userType === "admin" ? (
            <SearchFilters />
          ) : (
            <Navigate to="/admin/login" />
          )
        }
      />

      {/* Redirection par défaut */}
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
};

export default AdminRouter;