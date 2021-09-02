import image from '../resources/browser.JPG';

function VirtualWebUI() {
    return (
        <div>
            <div className="Article-Media">
                <img src={image} />
            </div>

            <p className="Article-Text">
                This project was a solo project I was assigned. The goal of the project was to simulate the API that feeds Agilent's Browser UI normally controls a physical instrument.
                Internal Agilent users can log in to an Angular admin page hosted in AWS and start a simulation. The simulation presents the user with a standard front-end that connects to the simulated back-end.
                The backend simulation is a Node JS server. 
            </p>

            <p>
                The cloud tech used in the project is S3, EC2, Elastik Beanstalk and RDS.
            </p>
        </div>
    )
}

export default VirtualWebUI;