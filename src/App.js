import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Layout from './components/common/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <h1>페이지</h1>
        <p>주요 내용</p>
      </Layout>
    </BrowserRouter>
  );
}

export default App;