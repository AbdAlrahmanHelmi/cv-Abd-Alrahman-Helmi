import Helmet from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import WorkExperince from "./pages/WorkExperince/WorkExperince";

function App() {
  return (
    <div>
      <Helmet>
        <title>Abd Al-Rahman Helmi CV</title>
        <meta name="description" content="home information" />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experince" element={<WorkExperince />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
