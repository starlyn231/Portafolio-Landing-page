import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/banner/Banner';
import { Skills } from './components/skills/Skills';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
