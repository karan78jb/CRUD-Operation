import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
  
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[id,setId]=useState('')
    const[name1,setName1]=useState('')
    const[address1,setAddress1]=useState('')
    const[id1,setId1]=useState('')
    const[students,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)
    alert(`New Student Added is `+name)
    fetch("http://localhost:8484/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
    
  })
}

const delClick=(id)=>{

  fetch(`http://localhost:8484/student/delete/${id}`,{
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    

}).then(()=>{
  console.log("New Student deleted")
  alert(`New Student Deleted id is `+ id)
})

}

const updClick=(id1,name,address)=>{
  
  const student1={name,address}
  console.log(student1)
  fetch(`http://localhost:8484/student/update/${id1}`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student1)

}).then(()=>{
  console.log("New Student update")
  alert(`New Student Update in id `+ id)
})
}

useEffect(()=>{
  fetch("http://localhost:8484/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Add Student</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Add
</Button>
<hr></hr>
<br></br>
{/* delte */}
<h1 id="delete" style={{color:"blue"}}>Delete Student</h1>
<TextField id="outlined-basic" label="Student Id" variant="outlined" fullWidth
      value={id}
      onChange={(e)=>setId(e.target.value)}
      />

<Button variant="contained" color="secondary" onClick={()=>delClick(id)}>
  Delete
</Button>
<hr></hr>
<br></br>
{/* update */}
<h1 id="update" style={{color:"blue"}}>Update Student</h1>
<TextField id="outlined-basic" label="Student Id1" variant="outlined" fullWidth
      value={id1}
      onChange={(e)=>setId1(e.target.value)}
      />
<TextField id="outlined-basic" label="Student name1" variant="outlined" fullWidth
      value={name1}
      onChange={(e)=>setName1(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address1" variant="outlined" fullWidth
      value={address1}
      onChange={(e)=>setAddress1(e.target.value)}
      />
<Button variant="contained" color="secondary" onClick={()=>updClick(id1,name1,address1)}>
 Update
</Button>

    </form>
   
    </Paper>
    <h1 id="show">Students</h1>

    <Paper elevation={3} style={paperStyle}>
    
      {students.map(student=>(
        
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}
         
        </Paper>
        
      ))
}

 
Total Student :- <b>{students.length}</b>
    </Paper>
   

    </Container>
    
  );
  
}

