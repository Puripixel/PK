import React, { useState } from "react";
import './styles/Home.css';
import welcomeImage from './assets/welcome-image.jpg';

function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="home-container">
      <div className="image-container">
      </div>
      <div className="text-container">
        <h1 className="headline">ยินดีต้อนรับสู่ สาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="description">
          สาขาเทคโนโลยีสารสนเทศของเราให้บริการการศึกษาคุณภาพสูง พร้อมทั้งกิจกรรมพิเศษเพื่อพัฒนาทักษะ
          และความสามารถของนักศึกษาในด้านเทคโนโลยีสารสนเทศ
        </p>
        <button className="cta-button" onClick={handleClick}>
          {showMore ? "ยุบข้อความ" : "เรียนรู้เพิ่มเติม"}
        </button>
        {showMore && (
          <div className="additional-info">
            <h2>เกี่ยวกับสาขาเทคโนโลยีสารสนเทศ</h2>
            <p>
              สาขาเทคโนโลยีสารสนเทศของเราเปิดสอนหลักสูตรที่ทันสมัยและมีคุณภาพ เพื่อเตรียม
              นักศึกษาให้พร้อมกับความท้าทายในโลกเทคโนโลยี โดยเน้นการพัฒนาทักษะด้านการเขียนโปรแกรม
              การพัฒนาเว็บไซต์ การดูแลระบบเครือข่าย และการรักษาความปลอดภัยไซเบอร์
            </p>
            <ul>
              <li>การพัฒนาแอปพลิเคชันมือถือและเว็บ</li>
              <li>การดูแลระบบเครือข่ายและฐานข้อมูล</li>
              <li>การรักษาความปลอดภัยในโลกไซเบอร์</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
