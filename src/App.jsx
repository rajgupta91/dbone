import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Retailers from "./pages/Retailers";
import Orders from "./pages/Orders";
import Outstanding from "./pages/Outstanding";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/retailers" element={<Retailers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/outstanding" element={<Outstanding />} />
      </Route>
    </Routes>
  );
}