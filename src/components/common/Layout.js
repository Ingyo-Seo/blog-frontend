import React from 'react';
import Header from './Header';
import Footer from './Footer';

// 해당 컴포넌트의 CSS 스타일을 위한 CSS 모듈 (선택적)
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />

      <main className="layout-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
