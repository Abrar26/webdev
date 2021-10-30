
import React, { useRef, useState } from "react";
import { Button,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Box
} from '@mui/material';

function AddSkill(){
    
    return (
        <>
        <div className="addskill">
          <h2>Add Your Skill</h2>
          <FormControl>
            <TextField id="outlined-basic" size="small" label="Outlined" variant="outlined" />
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" variant="outlined" aria-describedby="my-helper-text" />
            <Button color="primary" variant="contained" >Submit</Button>
          </FormControl>

          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined"  />
    </Box>
    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
        </>
    )
    }
export default AddSkill;
