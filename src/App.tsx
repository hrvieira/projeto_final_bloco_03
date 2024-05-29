import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[100%] bg-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
