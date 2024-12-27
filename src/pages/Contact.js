import React from "react";
import './styles/Contact.css';

function Contact() {
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
      </div>
    </div>
  );
}

export default Contact;
