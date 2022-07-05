// import logo from './logo.svg';
import './App.css';
import Navbar from './comps/Navbar.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function App() {
  return (
    <div>
      <Navbar />
      <img src="" alt="" />
      <div id='molecule'>
        <div className='circle'></div>
        <div id="line1"></div>
        <div className='circle' id='medium-c'></div>
        <div id="line2"></div>
        <div className='circle' id='small-c'></div>
        <div id="line3"></div>
        <div className="circle" id="semi-large-c"></div>
      </div>


      <button type='button'
        onMouseEnter={() => {
          document.getElementById('arrow-icon').style.color = 'yellow'
        }}
        onMouseLeave={() => {
          document.getElementById('arrow-icon').style.color = 'white'
        }}
      >Take a Tou <ArrowForwardIcon id='arrow-icon' /></button>

      <div id='img-nft'></div>

    </div>
  );
}

export default App;
