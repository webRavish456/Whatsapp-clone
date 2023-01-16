import { Box, styled, Typography } from "@mui/material";
import React from "react";


const Container= styled(Box)`
    
    display:flex;
    box-shadow: -1px 4px 20px -6px #000;
    height:30px;
    justify-content:center;
    border-radius:4px;
    z-index:99;
    cursor:pointer;
    width:100px;
    background-color:darkgrey;
    position:absolute;
    margin-top:300px;
`
const Setting=()=>
{
    return(
        <>
            <Container>
            <Typography>Log out</Typography>
            </Container>
        </>
    )
}
export default Setting;