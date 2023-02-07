import './App.css';
import ResultsSection from './ResultsSection/ResultsSection';
import Header from './Header/Header';



// it's considered good practice to keep your components in separate files and import them into your App.js file
// here I am importing the ResultsSection and Header components only, trying to keep the app.js file as clean as possible


function App() {
  return (
    <div>
      <Header />
      <ResultsSection />
    </div>
  );
}

export default App;
