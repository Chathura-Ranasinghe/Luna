import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import { ThemeProvider } from "./components/ui/DarkMode/theme-provider";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route index element={<Home/>} />
          </Routes>
        <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
