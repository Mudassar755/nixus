// import logo from './logo.svg';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home';
import Blogs from './pages/blogs';
import BlogPost from './pages/blog';
import { Container } from 'react-bootstrap';
import UseCases from './pages/usecases';
import UseCase from './pages/usecase';

function App() {
  return (
    <Router>
      {/* <Container> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/:slug" element={<BlogPost />} />
        <Route exact path="/usecases" element={<UseCases />} />
        <Route exact path="/usecases/:slug" element={<UseCase />} />
      </Routes>
      {/* </Container> */}
      <Footer />
    </Router>
  );
}

export default App;
