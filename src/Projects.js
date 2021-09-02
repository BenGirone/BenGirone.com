import React from 'react';
import './Projects.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import folder from './resources/folder.svg';

// Articles
import VGC from './ProjectArticles/VGC';
import VirtualWebUI from './ProjectArticles/VirtualWebUI';
import BrowserUI from './ProjectArticles/BrowserUI';
import APM from './ProjectArticles/APM';
import EasyGrade from './ProjectArticles/EasyGrade';
import AICar from './ProjectArticles/AICar';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="Projects-Header">
                    Projects
                </header>

                <main className="Projects-Main">
                    <Router>
                        <Switch>
                        <Route path="/Projects/AVI">
                            <AICar />
                        </Route>
                        <Route path="/Projects/EZG">
                            <EasyGrade />
                        </Route>
                        <Route path="/Projects/APM">
                            <APM />
                        </Route>
                        <Route path="/Projects/VGC">
                            <VGC />
                        </Route>
                        <Route path="/Projects/VAPI">
                            <VirtualWebUI />
                        </Route>
                        <Route path="/Projects/BUI">
                            <BrowserUI />
                        </Route>
                        <Route path="/">
                            <div className="Projects-FolderRow">
                                <Link className="Folder Projects-Folder" to="/Projects/AVI">
                                    <img className="filter-blue" src={folder} alt="Folder"/>
                                    <span className="BigSpan">Java Simulation</span>
                                    <span className="TinySpan">"Autonomous Vehicle Intersection"</span>
                                    
                                </Link>
                                <Link className="Folder Projects-Folder" to="/Projects/EZG">
                                    <img className="filter-blue" src={folder} alt="Folder"/>
                                    <span className="BigSpan">React JS Site</span>
                                    <span className="TinySpan">"EasyGrade.app"</span>
                                </Link>
                                <Link className="Folder Projects-Folder" to="/Projects/APM">
                                    <img className="filter-blue" src={folder} alt="Folder"/>
                                    <span className="BigSpan">Agilent Embedded C++</span>
                                    <span className="TinySpan">"Pattern Matching Algorithm"</span>
                                </Link>
                            </div>
                            <div className="Projects-FolderRow">
                                <Link className="Folder Projects-Folder" to="/Projects/VGC">
                                    <img className="filter-blue" src={folder} alt="Folder"/>
                                    <span className="BigSpan">Agilent .NET C#</span>
                                    <span className="TinySpan">"Virtual G.C. Simulator"</span>
                                </Link>
                                <Link className="Folder Projects-Folder" to="/Projects/VAPI">
                                    <img className="filter-blue" src={folder} alt="Folder"/>
                                    <span className="BigSpan">Agilent AWS Cloud</span>
                                    <span className="TinySpan">"Virtual Browser UI (Full Stack)"</span>
                                </Link>
                                <Link className="Folder Projects-Folder" to="/Projects/BUI">
                                    <img className="filter-blue" src={folder} alt="Folder"/>
                                    <span className="BigSpan">Agilent Web App</span>
                                    <span className="TinySpan">"Browser UI (Full Stack)"</span>
                                </Link>
                            </div>
                        </Route>
                        </Switch>
                    </Router>
                </main>
            </div>
        );
    }
};

export default Projects;