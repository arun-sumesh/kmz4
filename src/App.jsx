import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Stat from "./Components/Stat/Stat";
import Solutions from "./Components/Solutions/Solutions";
import Preloader from "./Components/Preloader/Preloader";

const App = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished && <Preloader finishLoading={() => setLoadingFinished(true)} />}
      {loadingFinished && (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Stat />
          <Solutions />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
