import React from 'react';

// 해당 컴포넌트의 CSS 스타일을 위한 CSS 모듈 (선택적)
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        © {new Date().getFullYear()} 나의 블로그. 모든 권리 보유.
      </div>
    </footer>
  );
}

export default Footer;
