import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import Projects from "@/features/projects/pages/Projects";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import Home from "@/features/dashboard/pages/Home";
import Settings from "@/features/dashboard/pages/Settings";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import { Toaster } from "./shared/ui/sonner";
import { AuthProvider } from "@/features/auth/context/AuthContext";
import PublicRoute from "./features/auth/components/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </>
    </AuthProvider>
  );
}

export default App;
