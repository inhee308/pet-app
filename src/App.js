import {Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage.js';
import AboutPage from './page/AboutPage.js';
import Header from './componenets/Header.js';
import Footer from './componenets/Footer.js';
import Quickbutton from './componenets/Quickbutton.js';
import SignUpForm from './page/SignUpForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
      <Quickbutton />
    </div>
  );
}

export default App;
