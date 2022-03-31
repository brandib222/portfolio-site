import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <div>This is an App</div>
      <Header />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
