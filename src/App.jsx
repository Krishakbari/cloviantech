
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import BlogPage from "./components/BlogPage";
import SingleBlog from "./components/SingleBlog";
import AboutPage from "./Pages/AboutPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Legal from "./Pages/Legal";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />


        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
