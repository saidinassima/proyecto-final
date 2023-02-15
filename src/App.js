import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

import { NotFoundPage } from "./pages/NotFoundPage";
import { Footer } from "./components/Footer";
function App() {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
