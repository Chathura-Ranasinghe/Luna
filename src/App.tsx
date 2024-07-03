import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./components/ui/DarkMode/theme-provider";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import APODPage from "./pages/APODPage";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="font-mono">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route index element={<HomePage/>} />
            <Route path="/APODPage" element={<APODPage/>} />
          </Routes>
        <Footer/>
        </BrowserRouter>

        <div className="fixed bg-muted/80 inset-0 -z-20">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>

      </ThemeProvider>
    </div>
  )
}

export default App
