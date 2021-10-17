import React from 'react';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Skill from './Skill';
import Service from './Service';
import Db from "../../Db";
import Abrar from "./img/Abrar.jpeg"
import IBHS from "./img/IBHS.jpg";
import CAHCET from "./img/CAHCET.jpg";
import CAH from "./img/CAH.jpg"
const Content = () => {
    
    return (
        <>
        <div className="home-center">
            {/* About us */}
            <div className="about">

            <div className="card myimage">
                <img src={Abrar} alt="Abrar" />
                <div className="card-body ">
                    <div className="about-profile-title" style={{marginTop:"15px"}}>
                        <h4 className="title">Name <span>:&nbsp;</span> </h4>
                        <h5 className="contact">Abrar Ahmed A</h5>
                    </div>
                    <div className="about-profile-title">
                        <h4 className="title">Age <span>:&nbsp;</span> </h4>
                        <h5 className="contact">21</h5>
                    </div>
                    <div className="about-profile-title">
                        <h4 className="title">Email <span>:&nbsp;</span> </h4>
                        <h5 className="contact">abrargd1695@gmail.com</h5>
                    </div>
                    <div className="about-profile-title">
                        <h4 className="title">PhoneNo <span>:&nbsp;</span> </h4>
                        <h5 className="contact">9080887018</h5>
                    </div>
                    <div className="about-profile-title">
                        <h4 className="title">Address<span>:&nbsp;</span></h4>
                        <h5 className="contact">No.60/5 Big Street, Melvisharam-632509</h5>
                    </div>
                </div>
            </div>
                <div className="right-side">
                    <div className="home-head">
                        <h3>ABOUT ME</h3>
                    </div>
                    <FormatQuoteIcon className="quote" />
                    <div className="home-content">
                        <p className="about-content">
                            <span>MY NAME IS ABRAR AHMED</span>. I'M A MERN STACK DEVELOPER. I'M GOOD AT REACT AND NODE. 
                            I HAVE A EXPERIENCE OF two MONTH IN MERN STACK DEVELOPER WITH REAL TIME PROJECT OF Chef@Home as a Intern. 
                            I'm Good at both Front-end And Back-end. I have Experience in GitHub as i have been worked on Real Project.
                        </p>
                    </div>
                    <FormatQuoteIcon className="quote-down"/>
                </div>
            </div>



            {/* Skills  */}
            {Db.map(skill =>{
                return (
                    <Skill name={skill.name} 
                        percentage={skill.percent}
                        key={skill.id} />
                );
            })}



            {/* Education */}
            <div className="home-head">
                <h3>EDUCATIONS </h3>
            </div>
            <div className="home-content">
                <div className="img">
                    <img src={IBHS} alt="IBHS" />
                    <p>Islamiah Boys Higher Secondary School</p>
                    <p>S.S.L.C(10th)</p>
                </div>
                <hr />
                <div className="img">
                    <img src={IBHS} alt="IBHS"  />
                    <p>Islamiah Boys Higher Secondary School</p>
                    <p>BIO-MATHS(12th)</p>
                </div>
                <hr />
                <div className="img">
                    <img src={CAHCET} alt="CAHCET" />
                    <p>C. Abdul Hakeem College</p>
                    <p>B.E Computer Science and Engineering</p>
                </div>
                <hr />
            </div>

            {/* Work Experience */}
            
            <div className="home-head">
                <h3>WORK EXPERIENCE </h3>
            </div>
            <div className="home-content">
                <div className="img">
                    <img src={CAH} alt="CAHCET" height="200px" width="200px" />
                    <p>Chef@Home</p>
                    <p>MERN STACK DEVELOPER</p>
                </div>
            </div>

            {/* Service */}
            <Service />


            <button className="btn btn-primary cv">Download Resume</button>



        </div>
            
        </>
    )
}

export default Content;
