import image from '../resources/easygrade.png';

function EasyGrade() {
    return (
        <div>
            <div className="Article-Media">
                <img src={image}></img>
            </div>

            <p><a href="https://easygrade.app" target="_blank">Open The Site</a></p>

            <p className="Article-Text">
                Easy grade is a site I developed for myself and my fellow students. It is a calculator that can tell students what grades they will need on tests, homework and essays within a Course. Students can begin by entering a desired grade (90% or "A" by default). Students can then copy the assignments from their syllabus. As they enter grades they have received on items so far, the calculator displays the minimum grade needed on remaining items.
            </p>

            <p className="Article-Text">
                The application is a front-end only React site hosted in Google Cloud. I made this as an excuse to learn React. Also, I was tired of being the person in the classroom that was routinely asked by my classmates, "What grade do I need on the final to pass this course again?"     
            </p>

            <p>
                I could now say, "Go to EasyGrade.app. It's a free site that can tell you that in under a minute!"
            </p>
        </div>
    )
}

export default EasyGrade;