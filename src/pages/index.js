import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom"; // Không cần BrowserRouter nữa
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function Pages() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Pages;
