import React from "react";
import { Button,
  FormControl,
  TextField,
  Box
} from '@mui/material';

function AddSkill(){
    
    return (
        <>
        <div className="addskill">
          <h2>Add Your Skill</h2>
          <div className="form-center form-border">
            <p >
              Add Skill Name with How much You Know About that Skill 
              Percentage...
            </p>
            <FormControl >
              <Box mb={3} mt={1.5}>
                  Skill Name : &nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="outlined-basic" size="small" variant="outlined" />
              </Box>
              <Box mb={3}>
                  Percentage: &nbsp;&nbsp;&nbsp;&nbsp;
                <TextField id="outlined-basic" size="small" variant="outlined" />
              </Box>
              <Button color="primary" variant="contained" >Submit</Button>
            </FormControl>
          </div>

          
        </div>
        </>
    )
    }
export default AddSkill;
