import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import {Link} from "react-router-dom"

const useStyles = makeStyles({
    btnStyle:{
        background: 'black',
        border: 0,
        borderRadius: 10,
        color: 'white',
        padding: '30px',
        cursor:"pointer",
        fontSize:"30px",
        transitionDuration:".3s",
        textDecoration:'none',
        outline:"5px solid black",

        "&:hover":{
            background: "rgb(214 208 211)",
            borderRadius: 10,
            color: 'black',
            padding: '30px',
            cursor:"pointer",
            fontSize:"30px",
            transform:"scale(0.9,0.9)",
            // boxSizing:" box-content",
            outline:"5px solid black"
        }
        }
})

function Starter() {

    const classes = useStyles()

  return (
    <div  style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",widht:"100%" , background: "rgb(238,174,202)",
    background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(227,216,222,1) 0%, rgba(212,209,210,1) 42%, rgba(218,206,213,1) 89%)"}}>
        <Grid container >
            <Grid xs={12} Item>
                <Typography sx={{textAlign:"center"}} component="h1" variant="h1">
                    Create Your Resume
                </Typography>
                <Typography sx={{textAlign:"center"}} variant="h1">
                <Link to="/form" className={classes.btnStyle} >Get Started</Link>
                </Typography>
            </Grid>    
        </Grid>
    </div>
  )
}

export default Starter
