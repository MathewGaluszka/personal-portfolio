import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer, Navigation } from "./components";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import "./index.scss";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="main-container dark-mode">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
