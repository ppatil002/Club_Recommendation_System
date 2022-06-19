import { Button, Grid, Typography } from '@mui/material'
import React,{useRef} from 'react'
import { jsPDF } from "jspdf";
import {useNavigate, ussNavigate} from "react-router-dom"
import { Box } from '@mui/system';

function ViewResume({basic,education,skill,workSample,setBasic,setEducation,setSkill,setWorkSample}) {
  const resumeRef = useRef();
  const navigate = useNavigate()
  function generatePdf(){

      let pdf = new jsPDF('p', 'pt', 'letter');
      pdf.html(document.getElementById('resume'), {
          callback: function () {
              pdf.save('myDocument.pdf');
          }
      });

      // setBasic({firstName:"",lastName:"",email:"",state:"",city:"",phone:""})
      // setEducation([{educationName:"",educationFrom:"",educationStart:"",educationCompletion:""}])
      // setSkill([{skillName:"",skillStatus:""}])
      // setWorkSample([{workSampleTitle:"",workSampleDes:""}]);

      navigate("/form")

  }

  function goBack(){
    navigate("/form")
  }


  return (
  <Grid container spacing={2} sx={{mt:4}}>
    <Grid sx={{mb:2}} container={true} item  xs={8}>
      <Box  sx={{ml:"auto"}}/>
      <Button onClick={goBack}  sx={{mr:2}} variant="contained" color="warning">Go back</Button>
      <Button onClick={generatePdf} variant="contained" color="success">Download</Button>
    </Grid>
    <Grid id="resume" ref={resumeRef} sx={{ml:2,p:5}} item xs={8}>
      <Grid container={true} spacing={3} item xs={12}>
        <Grid item xs={6}>
          <div >
            <Typography sx={{ borderBottom:"3px solid grey", textTransform: "capitalize"}} variant="h6" component="span">{`${basic.firstName} ${basic.lastName}`}</Typography>
          </div>
        </Grid>
        <Grid item xs={5}>
          <span>
            <Typography sx={{textAlign:"right"}} variant="subtitle1" component="div">{`${basic.email}`}</Typography>
            <Typography sx={{textAlign:"right"}} variant="caption" component="div">{`${basic.phone}`}</Typography>
            <Typography sx={{textAlign:"right",  textTransform: "capitalize"}} variant="caption" component="div">{`${basic.city}, ${basic.state}`}</Typography>
          </span>
        </Grid>
      </Grid>


      <Grid container={true} colSpacing={5} item xs={12} sx={{mt:3}}>
        <Grid item xs={5}>
          <div>
            <Typography variant="caption" component="span">Education</Typography>
          </div>
        </Grid>
        <Grid container={true} item xs={7} rowSpacing={0.5}>
          {
            education.map((element,i)=>(

            <Grid item xs={12}>
              <Typography sx={{ mb:-1.5, textTransform: "capitalize"}} variant="subtitle2" component="div">{`${element.educationName}`}</Typography>
              <Typography sx={{ textTransform: "capitalize"}} variant="caption" component="span">{`${element.educationFrom}`} {element.educationStart!='' ? (`${element.educationStart} to ${element.educationCompletion}`):''}</Typography>
              {/* <Typography variant="caption" component="span">{element.educationStart!='' ? (`${element.educationStart} to ${element.educationCompletion}`):''}</Typography> */}
            </Grid>

            ))
          }
        </Grid>
      </Grid>


      <Grid container={true} colSpacing={5} item xs={12} sx={{mt:3}}>
        <Grid item xs={5}>
          <div>
            <Typography variant="caption" component="span">Skills</Typography>
          </div>
        </Grid>
        <Grid container={true} item xs={7} spacing={0.5}>
          {
            skill.map((element,i)=>(

            <Grid item xs={6}>
              <Typography variant="subtitle2" sx={{mb:2,  textTransform: "capitalize"}} component="span">{`${element.skillName}`}</Typography>
              <Typography variant="caption" component="div">{`${element.skillStatus}`}</Typography>
            </Grid>

            ))
          }

        </Grid>
      </Grid>


      <Grid container={true} colSpacing={5} item xs={12} sx={{mt:3}}>
        <Grid item xs={5}>
          <div>
            <Typography variant="caption" component="span">Work Samples</Typography>
          </div>
        </Grid>
        <Grid container={true} item xs={7} spacing={0.5}>
          {
            workSample.map((element,i)=>(

            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{mb:2,  textTransform: "capitalize"}} component="span">{`${element.workSampleTitle}`}</Typography>
              <Typography variant="caption" sx={{  textTransform: "capitalize"}} component="div"> {`${element.workSampleDes}`}</Typography>
            </Grid>

            ))
          }
        </Grid>

      </Grid>

    </Grid>
  </Grid>
  )
}

export default ViewResume