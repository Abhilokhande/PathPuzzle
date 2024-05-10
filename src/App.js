import logo from './logo.svg';
import './App.css';
import Main from './component/main';
import AIplay from './component/AIplay';
import Firstpage from './component/Firstpage';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Path from './component/path';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="firstpage" element={<Firstpage />} />
          <Route path='Aiplay' element={<AIplay />} />
          <Route path='path' element={<Path/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
