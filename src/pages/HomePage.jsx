import React from "react";
import MainLayout from "../ui/layouts/MainLayout";
import Hero from "../ui/components/Hero";
import Values from "../ui/components/Values";
import About from "../ui/components/About";
import Contact from "../ui/components/Contact";
import Cta from "../ui/components/Cta";
import Cta2 from "../ui/components/Cta2";
import Quote from "../ui/components/Quote";
import MapBlock from "../ui/components/MapBlock";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Values />
      <About />
      <Contact />
      <Cta />
      <Cta2 />
      <Quote />
      <MapBlock />
    </MainLayout>
  );
};

export default HomePage;
