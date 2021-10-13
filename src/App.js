import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from "./components";


function App() {
  return (
    // <GlobalStyles>
    <Router>
      <GlobalStyle/>
        <Navbar />
        {/* <Switch>  </Switch> */}

      </Router>
    

  );
}

export default App;
