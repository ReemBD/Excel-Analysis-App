import logo from './logo.svg';
import './App.css';
import './assets/styles/styles.scss';
import { FoodAnalysisApp } from './pages/FoodAnalysisApp';
import { AppHeader } from 'cmps/AppHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from 'routes';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        {routes.map(route => <Route exact {...route} />)}
      </div>
    </Router>
  );
}

export default App;
