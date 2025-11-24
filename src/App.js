import './App.css';
import Main from './components/main';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/SideBar/sidebar';
import Footer from './components/Footer/footer';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className={"app"}>
      <BrowserRouter>
        <Navbar />
        <div className="main-area">
          <Main />
          <Sidebar />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
