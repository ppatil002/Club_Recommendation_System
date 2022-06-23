import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'
import * as yup from  "yup";
import {useForm} from 'react-hook-form';
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import "./ResumeFormCheckbox.css";


const schema = yup.object().shape({
    // educationName:yup.sting().required(),
    // educationStart:yup.sting().required(),
    // educationCompletion:yup.sting().required(),
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    email:yup.string().required(),
    // phone:yup.sting().required(),
    // state:yup.sting().required(),
    // city:yup.sting().required(),
})


function ResumeForm({basic,setBasic,education,setEducation,skill,setSkill,workSample,setWorkSample,experience,setExperience}) {

    // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = ["ASCI", "CSI", "SDS", "Veloci"];

  const [requestsreceived,setRequestsreceived] = useState([]);
  const [requestsaccepted,setRequestsaccepted] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    

    const handleForm = (data) => {}

    const {register , handleSubmit , errors} = useForm()
    
    
    
    const elevationValue = 5    

    //education
    const edu = {educationName:"",educationStart:"",educationCompletion:""}

    //skill
    const skl = {skillName:"",skillStatus:""}
    const skillStatusItem = ['Beginner','intermediate','Advance']
    

    function handleEducation(index,e){
        const temp = [...education];
        temp[index][e.target.name] = e.target.value;
        setEducation(temp);
        console.log(education)
    } 

    function handleAddMoreEdu(){
        setEducation([...education,edu])
    }

    function handleRemoveEdu(index){
        if(education.length===1){
            setEducation([edu])
            // setAddEducation(false)
            return 
        }
        const values = [...education];
        values.splice(index,1);
        setEducation(values)
    }

    function handleSkill(i,e){
        const {name , value} = e.target;
        skill[i][name] = value;
        setSkill([...skill]);
    }
    
    function handleRemoveSkill(index){
        if(skill.length===1){
            setSkill([skl])
        }
        const updatedSkill = skill.filter((item,i)=>i!==index)
        setSkill(updatedSkill);
    }

    function handleAddMoreSkill(){
        setSkill([...skill,skl])
    }

    function handleWorkSample(i,e){
        const {name , value} = e.target;
        workSample[i][name] = value;
        setWorkSample([...workSample]);
    }

    function handleRemoveWorkSample(index){
        if(workSample.length===1){
            setWorkSample([{workSampleTitle:"",workSampleDes:""}])
        }
        const updatedWorkSample = workSample.filter((item,i)=>i!==index)
        setWorkSample(updatedWorkSample);
    }

    function handleAddMoreWorkSample(){
        setWorkSample([...workSample,{workSampleTitle:"",workSampleDes:""}])
    }

    function handleExperience(i,e){
        const {name , value} = e.target;
        experience[i][name] = value;
        setExperience([...experience]);
    }

    function handleRemoveExperience(index){
        if(experience.length===1){
            setExperience([{ExperienceTitle:"",ExperienceDes:""}])
        }
        const updatedExperience = experience.filter((item,i)=>i!==index)
        setExperience(updatedExperience);
    }

    function handleAddMoreExperience(){
        setExperience([...experience,{ExperienceTitle:"",ExperienceDes:""}])
    }

    

const submit = (e) => {
    e.preventDefault();

    var firstname = localStorage.getItem("Mentorfname");
    var lastname = localStorage.getItem("Mentorlname");
    var username = localStorage.getItem("Mentoruname");
    var password = localStorage.getItem("Mentorpwd");
    var branch = localStorage.getItem("Mentorbranch");
    var year = localStorage.getItem("Mentoryear");
    var email = basic.email;
    var city = basic.city;
    var state = basic.state;
    var contactno = basic.phone;
    const skills = [...skill];
    const clubs = [...checked];
    const work = [...workSample];

    if(firstname === "" || lastname === "" || username === "" ||
    password === "" || branch === "" || year === "" || email === "" 
    || city === "" || state === "" || contactno === "" || skills.length === 0
    || clubs.length === 0 || experience.length === 0 || education.length === 0 || work.length === 0){
        alert("Please enter all details");
    }
    else{
        var body = {
            firstname : firstname,
            lastname : lastname,
            username : username,
            password: password,
            branch : branch,
            year : year,
            email : email,
            city : city,
            state: state,
            contactno : contactno,
            skills : skills,
            clubs : clubs,
            work : work,
            education : education,
            experience : experience,
            requestsaccepted : requestsaccepted,
            requestsreceived : requestsreceived,
        };
        axios.post("http://localhost:9000/mentorregister", body).then((res) => {
            alert(res.data.message);
            if(res.data.message==="Mentor Successfully registered"){
                localStorage.clear();
                window.location.href = "/mentorlogin";
            }
            
          });
    }

    
  }
    
  return (
    <Grid container spacing={2} sx={{mt:5,pb:10}}>
        <Grid  item sx={{mx:'auto'}} md={8}>
            <Box  elevation={elevationValue} sx={{p:2}} component={Paper} >
                <>
                <InputLabel>Basic Details</InputLabel>

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                // inputRef={register}
                                id="filled-helperText"
                                label="First Name"
                                name="firstName"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,firstName:e.target.value})}
                                value={localStorage.getItem("Mentorfname")}
                                disabled={true}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="Last Name"
                                name="lastName"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,lastName:e.target.value})}
                                value={localStorage.getItem("Mentorlname")}
                                disabled={true}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="Email"
                                name="email"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,email:e.target.value})}
                                value={basic.email}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="Phone no."
                                variant="filled"
                                name="phone"
                                onChange={(e)=>setBasic({...basic,phone:e.target.value})}
                                value={basic.phone}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="State"
                                name="state"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,state:e.target.value})}
                                value={basic.state}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <FormControl fullWidth >
                                <TextField
                                id="filled-helperText"
                                label="City"
                                name="city"
                                variant="filled"
                                onChange={(e)=>setBasic({...basic,city:e.target.value})}
                                value={basic.city}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </>
            </Box>

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                {
                    education.map((item , i)=>(
                        <>
                            <InputLabel>Education</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={3}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Education"
                                        variant="filled"
                                        name="educationName"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={3}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Education From"
                                        variant="filled"
                                        name="educationFrom"
                                        helperText="education From"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationFrom}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={2.5}>
                                    <FormControl fullWidth>
                                        <TextField
                                        label="Start"
                                        variant="filled"
                                        name="educationStart"
                                        type="month"
                                        helperText="education start"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationStart}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={2.5}>
                                    <FormControl fullWidth>
                                        <TextField
                                        label="End"
                                        variant="filled"
                                        name="educationCompletion"
                                        type="month"
                                        helperText="education completion"
                                        onChange={(e)=>handleEducation(i,e)}
                                        value={item.educationCompletion}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={1} sx={{my:'auto'}}>
                                    {
                                        education.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveEdu(i)} color="error">
                                        <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button onClick={handleAddMoreEdu} color="success" variant="contained">Add More</Button>
   
            </Box>
            

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                
                {
                    skill.map((item , i)=>(
                        <>
                            <InputLabel>Skill {i+1}</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={5.5}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Skill"
                                        variant="filled"
                                        name="skillName"
                                        onChange={(e)=>handleSkill(i,e)}
                                        value={item.skillName}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={5.5}>
                                    <FormControl fullWidth>
                                    <InputLabel id="demo-multiple-name-label">Status</InputLabel>
                                    <Select
                                        value={item.skillStatus}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Status"
                                        variant="filled"
                                        name="skillStatus"
                                        onChange={(e)=>handleSkill(i,e)}
                                        >
                                            {
                                            skillStatusItem.map((item,i)=>(
                                                <MenuItem key={i} value={item}>{item}</MenuItem>
                                            ))
                                        }
                                    </Select>

                                    </FormControl>
                                </Grid>
                                <Grid item xs={1} sx={{my:'auto'}}>
                                    {
                                        skill.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveSkill(i)} color="error">
                                        <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button sx={{mt:2}} onClick={handleAddMoreSkill} color="success" variant="contained">Add More </Button>
                

            </Box>

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                
                {
                    experience.map((item , i)=>(
                        <>
                            <InputLabel>Experience {i+1}</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={4}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Experience title"
                                        variant="filled"
                                        name="ExperienceTitle"
                                        onChange={(e)=>handleExperience(i,e)}
                                        value={item.ExperienceTitle}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={7}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Experience description"
                                        variant="filled"
                                        name="ExperienceDes"
                                        multiline
                                        rows={4}
                                        onChange={(e)=>handleExperience(i,e)}
                                        value={item.ExperienceDes}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={1} sx={{my:'auto'}}>
                                    {
                                        experience.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveExperience(i)} color="error">
                                            <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button sx={{mt:2}} onClick={handleAddMoreExperience} color="success" variant="contained">Add More </Button>
                

            </Box>            

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                
                {
                    workSample.map((item , i)=>(
                        <>
                            <InputLabel>Work {i+1}</InputLabel>
                            <Grid container spacing={2} key={i} sx={{mb:2}}>
                                <Grid item md={4}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Work title"
                                        variant="filled"
                                        name="workSampleTitle"
                                        onChange={(e)=>handleWorkSample(i,e)}
                                        value={item.workSampleTitle}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={7}>
                                    <FormControl fullWidth >
                                        <TextField
                                        label="Work description"
                                        variant="filled"
                                        name="workSampleDes"
                                        multiline
                                        rows={4}
                                        onChange={(e)=>handleWorkSample(i,e)}
                                        value={item.workSampleDes}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={1} sx={{my:'auto'}}>
                                    {
                                        workSample.length>1&&
                                    <IconButton size="small" onClick={()=>handleRemoveWorkSample(i)} color="error">
                                            <DeleteIcon fontSize="small" color="error"/>
                                    </IconButton>
                                    }
                                </Grid>
                            </Grid>
                        </>
                    ))
                }
                <Button sx={{mt:2}} onClick={handleAddMoreWorkSample} color="success" variant="contained">Add More </Button>
                

            </Box>

            <Box  elevation={elevationValue} component={Paper} sx={{mt:5,p:2 }}>
                
            <div className="checkList">
                <div className="title">Your ClubsList:</div>
                <div className="list-container">
                {checkList.map((item, index) => (
                    <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                    <span className={isChecked(item)}>{item}</span>
                    </div>
                ))}
                </div>
            </div>

            <div>
                {`Items checked are: ${checkedItems}`}
            </div>
                

            </Box>

            <Button fullWidth variant="contained" sx={{mt:5}} color="primary" onClick={submit}>Submit</Button>
        </Grid>
    </Grid>
  )
}

export default ResumeForm