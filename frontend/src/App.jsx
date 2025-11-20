import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
// import AdminRoute from "./pages/AdminRoute";

// Pages
import Home from "./pages/Home";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Founder from "./pages/Founder";
import Profile from "./pages/Profile";
// import AdminDashboard from "./pages/AdminDashboard";


// GOOGLE PROVIDER → IMPORTANT IMPORT
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="610472824749-5choa3lh6ecb564ndiim6fhuaocqefpv.apps.googleusercontent.com">
      <AuthProvider>
        <Header />
        <ScrollToTop />

        <main className="flex-1 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
            <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
            <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />

            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/founder" element={<Founder />} />

            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

            {/* <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} /> */}
          </Routes>
        </main>

        <Footer />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}
