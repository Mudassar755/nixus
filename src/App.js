// import logo from './logo.svg';
import './styles/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/Landing';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
