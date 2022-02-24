// import logo from './logo.svg';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home';
import Blogs from './pages/blogs';
import BlogPost from './pages/blog';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
      </Container>
    </Router>
  );
}

export default App;
