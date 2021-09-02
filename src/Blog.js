import React from 'react';
import './Blog.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import folder from './resources/folder.svg';
import About from './BlogArticles/About';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="Blog-Header">Blog</header>
                <main className="Blog-Main">
                    <Router>
                        <Switch>
                            <Route path="/Blog/About">
                                <About />
                            </Route>
                            <Route path="/">
                            <div className="Blog-FolderRow">
                                <Link className="Folder Blog-Folder" to="/Blog/About">
                                    <img className="filter-green" src={folder} alt="Folder"/>
                                    <span className="BigSpan">About Me</span>
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

export default Blog;