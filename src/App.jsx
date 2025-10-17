import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Members from "./pages/Members";
import Contact from "./pages/Contact";
import Hanuman from "./pages/Hanuman";
import { Donate } from "./pages/Donate";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-20 bg-white">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="members"><Members /></section>
        <section id="hanuman"><Hanuman /></section>
        <section id="donate"><Donate /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}
