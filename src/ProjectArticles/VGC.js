import image_8890 from '../resources/8890.webp';

function VGC() {
    return (
        <div>
            <img className="Article-Media" src={image_8890} alt="Virtual GC"/>
            <p className="Article-Text">
                The Virtual G.C. is a simulator that simulates several models of Agilent Gas Chromatographs. It was devloped for internal use.
                It simulates the back-end XML web service that several front-end "Data Systems" use to control the instrument.
                The Virtual G.C. is written in Visual Studio C# and uses Windows Forms for GUI. The architecture is Model View Controller.
            </p>
            <p className="Article-Text">
                The GUI is presented at startup and allows users to customize the Virtual Gas Chromatograph hardware. 
                After the Virtual G.C. is instantiated through the UI, the state of the virtual instrument begins being simulated.
                Actuals and setpoints can be monitored and set through seperate front-end software. Fake signal can be sent to the front-end as well.
            </p>
        </div>
    )
}

export default VGC;