import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";

function App() {
  return (
      <>
          <BrowserRouter>
              <Navbar />
              <div className="min-h-[70vh] bg-gray-200">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/home" element={<Home />} />
                      <Route
                          path="/categorias"
                          element={<ListarCategorias />}
                      />
                      <Route
                          path="/cardcategoria"
                          element={<FormCategoria />}
                      />
                      <Route
                          path="/editarcategoria/:id"
                          element={<FormCategoria />}
                      />
                      <Route
                          path="/deletarcategoria/:id"
                          element={<DeletarCategoria />}
                      />
                  </Routes>
              </div>
              <Footer />
          </BrowserRouter>
      </>
  );
}

export default App;
