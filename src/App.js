import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Navbar } from "./components";
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/" exact component={Home} /> */}
      </Switch>
        <Footer/>
      </Router>
  );
}

export default App;
