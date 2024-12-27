import React from "react";
import './Styles/Header.css';

function Header() {
  return (
    <header className="bg-golden text-white py-5">
      <div className="container text-center">
        <h1 className="display-4">สาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="lead">สร้างอนาคตด้วยการเรียนรู้ที่มีคุณภาพ</p>
      </div>
    </header>
  );
}

export default Header;
