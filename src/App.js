import logo from './logo.svg';
import './App.css';
import PalindromeChecker from './components/PalindromeChecker';
import AnagramChecker from './components/AnagramChecker';
import ArmstrongChecker from './components/ArmstrongChecker';
import MagicNumberChecker from './components/MagicNumberChecker';
import AutomorphicChecker from './components/AutomorphicChecker';
import BuzzNumberChecker from './components/BuzzNumberChecker';
import HappyNumberChecker from './components/HappyNumberChecker.js';


function App() {
  return (
    <div className="app-container">
   
            

        <div className="component">
         <ArmstrongChecker />
          </div>
     
    <div className="component">
      <PalindromeChecker />
    </div>
            
            <div className="component">
               <MagicNumberChecker />
            </div>
            <div className="component">
               <AutomorphicChecker />
            </div>
            <div className="component">
               <BuzzNumberChecker />
            </div>
            <div className="component">
               <HappyNumberChecker />
            </div>
            <div className="component">
               <AnagramChecker />
            </div>
  </div>
  );
}

export default App;
