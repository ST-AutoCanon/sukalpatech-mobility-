import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Enquiry from "./Pages/Enquery";
import Services from "./Pages/Services";
import Capabilities from "./Pages/Capabilities";
import Products from "./Pages/Products";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/capabilities" element={<Capabilities />} />
         <Route path="/products" element={<Products />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;