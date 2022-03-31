import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='middle-container'>
        <Projects />
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default App;
