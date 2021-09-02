import image from '../resources/browser.JPG';


function BrowserUI() {
    return (
        <div>
            <div className="Article-Media">
                <img src={image} />
            </div>

            <p className="Article-Text">
                Agilent's Browser UI is a large team project with ~100,000 lines of code. It is developed with an EXT.js front-end. The back-end is a Node.js API. Some functionality, such as signals, is also provided by a socket.io server. 
            </p>

            <p className="Article-Text">
                Every modern Agilent Gas Chromatograph serves its own Browser UI and API from the embedded firmware. The UI is used to control the instuments firmware/hardware. 
            </p>

            <p className="Article-Text">
                My responsibilities were defect resolution, performance optimization and the development of new feautures.
            </p>
        </div>
    )
}

export default BrowserUI;