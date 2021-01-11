import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  return (
    <>
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </SimpleBar>
    </>
  );
}

export default App;
