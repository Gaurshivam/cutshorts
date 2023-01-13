import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Formthree() {
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
        <h2>How are you Planning to use...</h2>
        <p>We'll streamline your setup experience.</p>
      </section>
      <div>
        <TextField
          id="standard-required"
          label="Company Name"
          defaultValue=""
          size="small"
        />
        <TextField
          id="standard-disabled"
          label="Position Name"
          defaultValue=""
          size="small"
        />
       <TextField
          id="standard-number"
          label="First Date"
          defaultValue={0}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
        <TextField
          id="standard-number"
          label="Last Date"
          defaultValue={0}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
      </div>
    </Box>
  );
}