import React from 'react';
import { Link } from 'react-router-dom';  // react-router-dom 라이브러리를 사용하는 경우
import './Header.css';  // CSS 파일을 따로 분리하여 사용하는 경우

const Header = () => {
  return (
    <header className="blog-header">
      <div className="container">
        <Link to="/" className="blog-title">
            개인 웹사이트
        </Link>
        <nav className="blog-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
