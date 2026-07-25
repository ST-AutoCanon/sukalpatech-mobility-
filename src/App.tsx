import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Enquiry from "./Pages/Enquery";
import Services from "./Pages/Services";
import NewProtoDevelopment from "./Pages/Capabilities/NewProtodev";
import PreHomologation from "./Pages/Capabilities/PreHomologation";
import PostProduction from "./Pages/Capabilities/Postprod";
import Capabilities from "./Pages/Capabilities";
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
        <Route
          path="/capabilities/new-proto-development"
          element={<NewProtoDevelopment />}
        />

        <Route
          path="/capabilities/pre-homologation"
          element={<PreHomologation />}
        />

        <Route
          path="/capabilities/post-production"
          element={<PostProduction />}
        />          <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;