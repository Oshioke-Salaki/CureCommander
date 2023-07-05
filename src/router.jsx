import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Patient from "./pages/Patient";
import PatientInoPage from "./pages/PatientInoPage";
const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        {/* AUTH Routes */}
        {/* <Route path="/signup" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />*/}

        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/patients/:id" element={<PatientInoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterConfig;
