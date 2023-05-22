import logo from './code-first-firls-logo.png';
import './App.css';
import Button from './components/Button/Button'
import StarRating from './components/Component/StarRaiting'

function App() {
  return (
    <body>
      <div className="App">
        
        <div class="content-card">
          <header className="App-header">
            <h1>JavaScript Course</h1>
            <h4> May 2023</h4>
            <img src={logo} className="App-logo" alt="logo" />
            <div class="raiting">
              <h2> How did you like the course? </h2>
              <StarRating />
            </div>
            <div class="rsvp">
              <h3> Do you want to hear about other courses? </h3>
              <Button />
              <h3 id = "userMsg"></h3>
            </div>
          </header>
        </div>
      </div>
    </body>
  );
}

export default App;
