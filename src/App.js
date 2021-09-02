import React from 'react';
import './App.css';
import CV from './CV';
import Projects from './Projects';
import Blog from './Blog';
import folder from './resources/folder.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route path="/CV">
                <CV />
              </Route>
              <Route path="/Projects">
                <Projects />
              </Route>
              <Route path="/Blog">
                <Blog />
              </Route>
              <Route path="/">
                <header className="App-header">
                      Hi! I'm Ben. Welcome to my site.
                </header>
                
                <main>
                    <div className="CV">
                        <Link className="Folder" to="/CV">
                            <img src={folder} alt="Folder"/>
                            <span className="BigSpan">CV</span>
                        </Link>
                    </div>
                    <div className="Projects">
                        <Link className="Folder" to="/Projects">
                            <img className="filter-blue" src={folder} alt="Folder"/>
                            <span className="BigSpan">Projects</span>
                        </Link>
                    </div>
                    <div className="Blog">
                        <Link className="Folder" to="/Blog">
                            <img className="filter-green" src={folder} alt="Folder"/>
                            <span className="BigSpan">Blog</span>
                        </Link>
                    </div>
                </main>
              </Route>
            </Switch>
          </Router>
        </div>
      );
  }
};

export default App;
