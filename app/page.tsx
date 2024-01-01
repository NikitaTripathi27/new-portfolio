"use client";

import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Qualification from "@/components/Qualification";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isVisible = () =>
      window.scrollY >= 1000 ? setVisible(true) : setVisible(false);

    window.addEventListener("scroll", isVisible);

    return () => window.removeEventListener("scroll", isVisible);
  });
  return (
    <>
      {visible && (
        <div className="fixed bottom-10 right-4">
          <a
            href="#home"
            className="flex items-center border px-4 py-2 rounded-lg dark:bg-[#191919] z-50"
          >
            <span className="text-sm">Scroll To Top</span>
            <i className="uil uil-arrow-up animate-bounce ml-1 text-xl"></i>
          </a>
        </div>
      )}
      <Header />
      <section id="home" className="section">
        <Banner />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="services" className="section">
        <Services />
      </section>
      <section id="services">
        <Qualification />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
