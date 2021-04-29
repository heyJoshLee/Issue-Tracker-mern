import './App.scss';
import './one-page-wonder.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Account from './components/pages/Account';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import LogOut from './components/pages/LogOut';
import NavBar from './components/shared/NavBar';
import FlashMessages from './components/shared/FlashMessages';
import NewOrganization from './components/organizations/NewOrganization';
import Organizations from './components/organizations/Organizations';
import Organization from './components/organizations/Organization';
import Project from './components/projects/Project';

function App() {

  // @ts-ignore
  const auth = useSelector((state) => state.auth );

  return (
    <div className="App">
      <div className="app-container">
        <Router>
          <NavBar />
          <div className="body container">
            <FlashMessages />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/logout" component={LogOut} />
              <Route path="/organizations/:id/projects/:id" component={Project} />
              <Route exact path="/organizations/new" component={NewOrganization} />
              <Route exact path="/organizations/:id" component={Organization} />
              <Route exact path="/organizations" component={Organizations} />
              <Route exact path="/account" component={Account} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
