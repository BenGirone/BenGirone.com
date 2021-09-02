import image_wedding from '../resources/RY3A0877.jpg';
import image_award from '../resources/award.jpg';
import '../Article.css';


function About() {
    const today = Date.now();
    const birthday = new Date('August 10, 1997');
    const ageDifMs = today - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    const age =  Math.abs(ageDate.getUTCFullYear() - 1970);
    return (
        <div>
            <div className="Article-Media">
                <img src={image_award} />
            </div>
            
            <p className="Article-Text">
                I'm Ben Girone. I was born on August 10, 1997. That makes me {age} years old at the moment. This blog post is programmed to automatically calculate that age. If you can't tell by the construction of this site, I like programming things. I first began programming with video game scripting languages in high school (~2014). I quickly developed a deep interest in the problem solving process of programming. This lead me to learn many other languages to solve more complicated problems.
            </p>

            <p className="Article-Text">
                In college, I took my fascination with problem solving a step further and decided that a degree in computer science wasn't enough. I opted to get a degree in mathematics as well. Towards the end of college I discovered a hobby that also scratches my itch for solving complex problems. Chess! 
            </p>

            <p className="Article-Text">
                Currently, I'm working at Agilent Technologies developing software and firmware solutions to better the field of Gas Chromatography. I do Full stack UI development, as well as develop cutting edge algorithms using math, statistics and machine learning. Outside of work, I still spend plenty of time developing personal projects like this site.
            </p>
        </div>)
}

export default About;