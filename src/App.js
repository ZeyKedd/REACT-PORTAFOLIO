import './App.css';
import Main from './components/main';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/SideBar/sidebar';

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
      </BrowserRouter>
    </div>
  );
}

export default App;
