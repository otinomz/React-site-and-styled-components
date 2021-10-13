import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from "./components";
import Home from './pages/HomePage/Home';


function App() {
  return (
    // <GlobalStyles>
    <Router>
      <GlobalStyle/>
        <Navbar />
      <Switch>
      
          <Route path="/" exact component={Home}></Route>
      
      </Switch>

      </Router>
    

  );
}

export default App;
