import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import PlansPage from "./pages/PlansPage";
import SignupPage from "./pages/SignupPage";
import NotesPage from "./pages/NotesPage";
import ProfilePage from "./pages/ProfilePage";
import InvitePage from "./pages/InvitePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/signup/:plan" element={<SignupPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/invite" element={<InvitePage />} />
      </Routes>
    </Router>
  );
}

export default App;
