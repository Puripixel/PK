import React from "react";
import './styles/Courses.css';

function Courses() {
  return (
    <div className="courses-container">
      <div className="courses-content">
        <h1 className="courses-title">หลักสูตรที่เปิดสอน</h1>
        <p className="courses-description">
          สาขาเทคโนโลยีสารสนเทศของเราเปิดสอนหลักสูตรที่เน้นการพัฒนาทักษะทางด้านเทคโนโลยีที่ทันสมัย
          ทั้งในระดับ ปวช และ ปวส เพื่อเตรียมความพร้อมให้กับนักศึกษาเข้าสู่ตลาดแรงงาน
        </p>
        <ul className="courses-list">
          <li>หลักสูตร ปวช. เทคโนโลยีสารสนเทศ</li>
          <li>หลักสูตร ปวส. เทคโนโลยีสารสนเทศ</li>
        </ul>
      </div>
    </div>
  );
}

export default Courses;
