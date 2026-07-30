import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Enquiry from "./Pages/Enquery";
import Sparepartservices from "./Pages/Services/Sparepartservices";
import Technicaldoc from "./Pages/Services/Technicaldoc";
import Technicalsupport from "./Pages/Services/Technicalsupport";
import NewProtoDevelopment from "./Pages/Capabilities/NewProtodev";
import PreHomologation from "./Pages/Capabilities/PreHomologation";
import PostProduction from "./Pages/Capabilities/Postprod";
import Capabilities from "./Pages/Capabilities";
import Careers from "./Pages/Careers/Careers";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services/spare-parts" element={<Sparepartservices />} />

        <Route
          path="/services/technical-support"
          element={<Technicaldoc />}
        />

        <Route
          path="/services/technical-documentation"
          element={<Technicalsupport />}
        />
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
        />   
        <Route path="/careers" element={<Careers />} />       
       <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;