import './App.css';
import Main from './components/main';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    // <></>
    <div classname={"app"}>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
