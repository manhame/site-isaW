import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ReboutologiePage from "@/pages/ReboutologiePage";
import AmmaPage from "@/pages/AmmaPage";
import RelaxationPage from "@/pages/RelaxationPage";
import ReikiPage from "@/pages/ReikiPage";
import EmmettPage from "@/pages/EmmettPage";
import TarifsContactPage from "@/pages/TarifsContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-amber-100">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reboutologie" element={<ReboutologiePage />} />
            <Route path="/amma-assis" element={<AmmaPage />} />
            <Route path="/massage-bien-etre" element={<RelaxationPage />} />
            <Route path="/reiki" element={<ReikiPage />} />
            <Route path="/technique-emmett" element={<EmmettPage />} />
            <Route path="/tarifs-et-contact" element={<TarifsContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;