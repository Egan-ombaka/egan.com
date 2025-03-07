import React, { useState } from "react";
import Footer from "./components/Footer";
import Github from "./components/Github";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovingIcons from "./components/MovingIcons";
import Work from "./components/Work";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

const icons = [
  { src: "icons/react.svg", alt: "React.JS" },
  { src: "icons/icon2.svg", alt: "Javascript" },
  { src: "icons/icon3.svg", alt: "Python" },
  { src: "icons/icon4.svg", alt: "React.JS" },
  { src: "icons/icon5.svg", alt: "React.JS" },
  { src: "icons/icon6.svg", alt: "React.JS" },
  { src: "icons/icon7.svg", alt: "React.JS" },
  { src: "icons/linux.svg", alt: "React.JS" },
  { src: "icons/figma.svg", alt: "React.JS" },
  { src: "icons/docker.svg", alt: "Docker" },
  { src: "icons/eclipse.svg", alt: "Eclipse JAVA IDE" },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return (
          <>
            <Projects />
            <Footer />
          </>
        );
      case "blog":
        return (
          <>
            <Blog />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <Github />
            <Work />
            <MovingIcons icons={icons} />
            <Footer />
          </>
        );
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
