import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRouter from './router';

function App() {
  

  return (
    <>

        <Router>
          <MyRouter />
        </Router>
    </>
  );
}

export default App;
