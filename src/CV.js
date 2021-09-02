import React from 'react';
import './CV.css';

class CV extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="CV-Header">CV</header>
                <main className="CV-Main">
                    <div className="Download"><a href="BenGironeResume.pdf">Download as PDF</a></div>
                    <iframe src="./Resume.html"></iframe>
                </main>
                
            </div>
        );
    }
};

export default CV;