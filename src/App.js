import './App.css';
import Footer from './components/footer/Footer';
import LeftColumn from './components/left-column/LeftColumn';
import RightColumn from './components/right-column/RightColumn';

function App() {
  return (
    <div className="App">
      <div className="w3-content w3-margin-top" style={{maxWidth: "1400px"}}>
        <div className="w3-row-padding">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
