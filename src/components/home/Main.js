import React from 'react'
import lap from "./img/lap1.jpg";
const Main = () => {
    return (
        <>
        <div className="main-page">
            <div >
                <div className="bg-img" >
                    <img src={lap} alt="lap"    width="100%"  />
                </div>
                <div className="center">
                        <h1 className="main-content"><span>HI I'M ABRAR AHMED</span></h1>
                    <div>
                        <h6 className="main-content">I am Mern Developer</h6>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Main;