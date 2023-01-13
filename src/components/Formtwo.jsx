import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Formtwo() {
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
        <h2>Let's set up a home for all...</h2>
        <p>You can always create another workspace later.</p>
      </section>
      <div>
        <TextField
          id="standard-required"
          label="Workspace Name"
          defaultValue="steve"
          size="small"
        />
        <TextField
          id="standard-disabled"
          label="E-mail"
          type='email'
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
          label="www.eden.com/"
          type={'url'}
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
        />
      </div>
    </Box>
  );
}