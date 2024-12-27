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
        <img src={welcomeImage} alt="วิทยาลัยลานนาโปลิ" className="welcome-image" />
      </div>
      <div className="text-container">
        <h1 className="headline">ยินดีต้อนรับสู่ วิทยาลัยลานนาโปลิ</h1>
        <p className="description">
          วิทยาลัยลานนาโปลิให้บริการการศึกษาคุณภาพสูง พร้อมทั้งกิจกรรมพิเศษเพื่อพัฒนาทักษะ
          และความสามารถของนักเรียน
        </p>
        <button className="cta-button" onClick={handleClick}>
          {showMore ? "ยุบข้อความ" : "เรียนรู้เพิ่มเติม"}
        </button>
        {showMore && (
          <div className="additional-info">
            <p>วิทยาลัยลานนาโปลิได้รับการยอมรับจากหลายสถาบันทางการศึกษา...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
