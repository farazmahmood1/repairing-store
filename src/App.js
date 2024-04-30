import "./App.css";
import Footer from "./Components/Body/Footer";
import Header from "./Components/Body/Navbar/Header";
import AboutUs from "./Components/HomePage/AboutUs";
import Count from "./Components/HomePage/Count";
import Hero from "./Components/HomePage/Hero";
import Services from "./Components/HomePage/Services";
import Testimonial from "./Components/HomePage/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Count />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
