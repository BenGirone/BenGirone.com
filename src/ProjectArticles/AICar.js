import '../Article.css';

function AICar() {
    return (
        <div>
            <div className="Article-Video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/C9HgkgkNgkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <p className="Article-Text">
                This project was developed as my senior thesis in college. I came up with the idea while watching some youtube videos about autonomous cars and intersections. The video claimed that if all cars were autonomous, then at a red light they could continue simultaneously upon a green light. I thought that was incredible, but I felt it could be taken further. If the cars were autonomous, why should they stop at all at red lights? A decent scheduling algorithm should allow the cars to avoid collision.
            </p>

            <p className="Article-Text">
                I chose to develop the project using the "Processing" library in Java for the visual representation. I was familiar with the javascript counterpart "p5.js", but wanted the multithreading support of Java. I had to explore several fields of study to complete the process in the short 2 month time frame. Linear Algebra, Scheduling Algorithms and Discrete-Event Simulation. Due to the short time-frame, I was unable to finish animated turning vehicles. However, the scheduling algorithms can handle them as well as variably sized cars/trucks. The entire application is only a 1000 lines of well structured code.
            </p>

            <p className="Article-Text">
                The program operates at a tick rate determined by the "Processing" animation framework. On each tick the scheduling algorithm iterates over each car and tries to make the necessary space-time reservations for the car to travel through the intersection at the a speed between 1 m.p.h. and the maximum speed limit. As you increase the frequency of cars in each lane, the cars can get slow, but never crash nor stop. At maximum frequency the cars would form a stable pattern and speed actually increases.
            </p>
        </div>
    )
}

export default AICar;