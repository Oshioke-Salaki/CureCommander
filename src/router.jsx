import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
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
          <Route path="/patients" element={<Dashboard />} />
          {/* <Route path="/spm/properties" element={<SPMProperties />} />
          <Route path="/spm/properties/:id" element={<SPMProperty />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterConfig;
