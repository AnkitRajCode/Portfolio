import './style.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import Aboutme from './components/aboutme';
import TechTools from './components/techTools';
import Projects from './components/projects';
import Journey from './components/journey';
import Footer from './components/footer';

function App() {
  return (
    <div className="Body">
      <div className="sideBar">
        <SideBar></SideBar>
      </div>
      <div className="mainBody">
        <Header></Header>
        <Aboutme></Aboutme>
        <TechTools></TechTools>
        <Projects></Projects>
        <Journey></Journey>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
