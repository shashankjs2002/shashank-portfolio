import Home from './components/Home';
import './components/css/home.css'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="home">
      
      <Home/>
      <Navbar/>
      <div className="bottom">

      <Skills/>
      <hr/>
      <Projects/>
      <hr/>
      {/* <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="+3l+p8-2p-6f+12g"
     data-ad-client="ca-pub-6847172398832884"
     data-ad-slot="3665300344"></ins> */}
      <Contact/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;

// Respected HR,
// With knowledge of Frontend development and Reactjs, I want to be a part of your organization.
// I have developed my portfolio website in React with embedded message form that receives responses via google form. Also, my project named 10-news uses news API to fetch news with search functionalities.  My-e-Notes, one of my Node.js project uses authentication such that login user can perform CRUD operations. Please checkout my portfolio link - 'https://shashankjsirothiya.tk/'.

// Yours Truely
// Shashank J. Sirothiya
