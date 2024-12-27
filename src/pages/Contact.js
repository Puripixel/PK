import React, { useState } from "react";
import './styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API or displaying a success message)
    console.log("Form submitted:", formData);
    alert("ข้อมูลของคุณถูกส่งเรียบร้อยแล้ว");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">ติดต่อเรา</h1>
        <div className="contact-info">
          <p className="info-item">
            <strong>ที่อยู่:</strong> 123 ถนนหลักเมือง, เชียงใหม่, ประเทศไทย
          </p>
          <p className="info-item">
            <strong>โทรศัพท์:</strong> 081-234-5678
          </p>
          <p className="info-item">
            <strong>อีเมล:</strong> info@lanapoli.ac.th
          </p>
        </div>

        {/* ฟอร์มกรอกข้อมูล */}
        <h2>กรุณากรอกข้อมูลสอบถาม</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">ชื่อของคุณ</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">อีเมล</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">ข้อความ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">ส่งข้อความ</button>
        </form>

        {/* ฝังแผนที่ Google */}
        <h2>แผนที่</h2>
        <div className="google-map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2245.612222940678!2d98.99291275938789!3d18.81354294144375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3bcb57f2cda3%3A0x5a42c69f9e85016a!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LmC4Lib4Lil4Li04LmA4LiX4LiE4LiZ4Li04LiE4Lil4Liy4LiZ4LiZ4LiyIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1735275352728!5m2!1sth!2sth"
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
