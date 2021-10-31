import React from 'react'

const Skill = (props) => {
    var percent = props.percentage;
    var value = parseFloat(percent);
    var result = 100 - value +"%";

    const style={
        margin: "2%",
        border: "1px solid #e34c26",
        height: "10px",
        width:"70%",
        backgroundImage: `linear-gradient(to right, #e34c26 ${props.percentage} ,white ${result})`,
        borderRadius : "5px"
      }

      
    return (
        <>
            <div className="home-head skill-head">
                <h3>SKILLS </h3>
            </div>
            <div className="home-content skill-content">
                <div className="skills-content">
                    <div className="skill-frontend-item">
                        <div className="skill-item">
                            <p>HTML/CSS</p>
                            <div className="item-1">
                                {/* SKILLS LINE USING CSS */}
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>JavaScript</p>
                            <div className="item-2">
                                {/* SKILLS LINE USING CSS */}
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>ReactJS</p>
                            <div className="item-3">
                                {/* SKILLS LINE USING CSS */}
                            </div>
                        </div>
                    </div>

                    <div className="skill-backend-item">
                        <div className="skill-item">
                            <p>NodeJs/Express</p>
                            <div className="item-4">
                                {/* SKILLS LINE USING CSS */}
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>RestFul API</p>
                            <div className="item-5">
                                {/* SKILLS LINE USING CSS */}
                            </div>
                        </div>
                        <div className="skill-item">
                            <p>MongoDB/Mongoose</p>
                            <div className="item-6">
                                {/* SKILLS LINE USING CSS */}
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <div className="skill-item">
                        <p>{props.name}</p>
                        <div className="item" style={style}>
                            {/* SKILLS LINE USING CSS */}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Skill;
