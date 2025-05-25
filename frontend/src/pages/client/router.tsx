import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./authentification/Login";
import Register from "./authentification/Register";
import Categories from "./Categories";
import Search from "./Search";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import PublishRecipe from "./PublishRecipe";
import Profile from "./Profile";
import NutritionalDashboard from "./NutritionalDashboard";
import ShoppingList from "./ShoppingList";
import MealPlanner from "./MealPlanner";
import Favorites from "./Favorites";
import { useAuth } from "../../context/AuthContext";

const ClientRouter = () => {
  const { isLoggedIn, userType } = useAuth();

  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipes/:category" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />

      {/* Routes protégées (nécessitent une connexion client) */}
      <Route
        path="/publish"
        element={
          isLoggedIn && userType === "client" ? (
            <PublishRecipe />
          ) : (
            <Navigate to="/client/login" />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isLoggedIn && userType === "client" ? (
            <Profile />
          ) : (
            <Navigate to="/client/login" />
          )
        }
      />
      <Route
        path="/nutritional-dashboard"
        element={
          isLoggedIn && userType === "client" ? (
            <NutritionalDashboard />
          ) : (
            <Navigate to="/client/login" />
          )
        }
      />
      <Route
        path="/shopping-list"
        element={
          isLoggedIn && userType === "client" ? (
            <ShoppingList />
          ) : (
            <Navigate to="/client/login" />
          )
        }
      />
      <Route
        path="/meal-planner"
        element={
          isLoggedIn && userType === "client" ? (
            <MealPlanner />
          ) : (
            <Navigate to="/client/login" />
          )
        }
      />
      <Route
        path="/favorites"
        element={
          isLoggedIn && userType === "client" ? (
            <Favorites />
          ) : (
            <Navigate to="/client/login" />
          )
        }
      />

      {/* Redirection par défaut */}
      <Route path="*" element={<Navigate to="/client" />} />
    </Routes>
  );
};

export default ClientRouter;