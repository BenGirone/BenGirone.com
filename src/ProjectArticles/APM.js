function APM() {
    return (
        <div>
            <p className="Article-Text">
                Top secret! No image here. 
            </p>

            <p className="Article-Text">
                I initiated this project myself. I saw that the existing methods being used were insufficient and asked for the time to research and develop a better solution. This project was a year long effort to create a reliable system to match the peaks in a reference and sample signal. In the sample signal, the peaks from the reference signal could have shifted places several minutes. There could also be severe warping, data loss and impurity peaks.
            </p>

            <p className="Article-Text">
                I cannot legally mention any specifics of the algorithm or mention how it is used by Agilent. I can say that it works very well and manages to have a quadratic time complexity. This project involved a lot of machine learning, data science, statistics and "clever" math. I initially developed the algorithm in python. When it became sufficiently accurate, I re-implemented it in embedded C++. 
            </p>
        </div>
    )
}

export default APM;