import React from "react";
import './styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">เกี่ยวกับสาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="about-description">
          สาขาเทคโนโลยีสารสนเทศเป็นสาขาที่มุ่งเน้นการพัฒนาความรู้ด้านเทคโนโลยี
          และการจัดการข้อมูลที่ทันสมัย เพื่อสร้างบุคลากรที่มีคุณภาพสูงในการทำงาน
          ในโลกดิจิทัล
        </p>
        <p className="about-mission">
          สาขาของเรามีเป้าหมายในการเตรียมความพร้อมให้กับนักศึกษาด้วยหลักสูตรที่ทันสมัย
          และเน้นการฝึกปฏิบัติจริง เพื่อให้นักศึกษามีความสามารถในการพัฒนาและบริหารจัดการ
          เทคโนโลยีสารสนเทศในองค์กรต่างๆ
        </p>
      </div>
    </div>
  );
}

export default About;
