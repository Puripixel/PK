import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
  // สถานะสำหรับจัดการหน้าปัจจุบัน
  const [currentPage, setCurrentPage] = useState("home");

  // ฟังก์ชันสำหรับเรนเดอร์หน้าเว็บที่เลือก
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "courses":
        return <Courses />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Header อยู่ด้านบนของ Navbar */}
      <Header />
      {/* Navbar พร้อมฟังก์ชันเปลี่ยนหน้า */}
      <Navbar setCurrentPage={setCurrentPage} />
      {/* ส่วนเนื้อหาหลัก */}
      <main>{renderPage()}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
