import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
   <div className="min-h-screen bg-grey-50 text-[#000000]">

      
      <Navbar />

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
       
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
