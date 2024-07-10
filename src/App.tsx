import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./components/ui/DarkMode/theme-provider";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import APODPage from "./pages/APODPage";
import NeoWsPage from "./pages/NeoWsPage";
import AboutPage from "./pages/AboutPage";
import Loading from "./components/Interact/Loading";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration based on your requirements

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {loading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/apod" element={<APODPage />} />
              <Route path="/neows" element={<NeoWsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
        <div className="fixed bg-gradient-to-r from-indigo-600/5 via-orange-700/5 to-blue-900/5 ... inset-0 -z-10">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
