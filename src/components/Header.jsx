import React from "react";
import {Box, Container, Typography} from "@material-ui/core";


function Header(){

    return <>
        <div className="head">

        <Box className="item">
            <Box className="item1">UI/UX Design</Box>
            <Box className="item2">React Dev</Box>
            <Box className="item3">Npm</Box>
        </Box>
        <Box className="item">
            <Box className="item4">👋 Hi there</Box>
            <Box className="item5">🎮 Game Lover</Box>
            <Box className="item6">📋 Download Resume</Box>
        </Box>

        <img src={`${process.env.PUBLIC_URL}/Abrar.jpeg`} width="30%" height="60%" alt="Picture"/>
        </div>
        <div>
            <Container className="container">
                <h4 className="headname">HI THERE, I'M ABRAR</h4>
                <h2 className="headpassion">A Web designer with passion to web</h2>
                <p className="about" variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
            </Container>
            
        </div>
    </>
}




export default Header;