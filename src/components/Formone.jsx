import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Formone() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
       
      <section>
        <h2>Welcome! First things first...</h2>
        <p>You can always change them later.</p>
      </section>
      <div >
      <TextField
          id="outlined-size-small"
          label="First Name"
          defaultValue="John" 
          size="small"
        />
        <TextField 
          id="standard-disabled"
          label="Last Name"
          defaultValue="Duo" 
          size="small"
        />
        <TextField 
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Welcome!!"
          InputProps={{
            readOnly: true,
          }}
          size="small"
        />
        <TextField
          id="standard-number"
          defaultValue={0}
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
      </div>
    </Box>
  );
}