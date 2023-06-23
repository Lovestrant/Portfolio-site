import { Box, Button, Grid, MenuItem, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import Header from "./header";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


function Developer() {
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('School/Experience');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('Please fill this field');

    const handleChange = (event: any, newValue: number) => {
      setValue(newValue);
    }

    const postContent = () => {
        const isValid = () => {
          if(category === ''){}
        }

    }
    const postAboutContent = () => {

    }

    const theOptionList = [
    {
        value: 'School',
        label: 'School'
    },
    {
        value: 'Education',
        label: 'Education'
    }, 
    {
        value: 'Experience',
        label: 'Experience'
    }
    ];
    return(
        <div>
            <Header />
            <Grid sx={{width: '100%', display: 'flex', justifyContent: 'center', textColor: 'secondary'}}>
            <Tabs value={ value } onChange={ handleChange }>
                <Tab label='Other Post Page' />
                <Tab label='About Post Page' />
            </Tabs>
            </Grid>
            {value === 0 && 
            <Box p={2}>
             <Grid xs={12}>
                <Stack spacing={2} sx={{
                    alignItems: 'center'
                }}>
                <Typography>Fill all the fields:</Typography>
              <TextField
               id="outlined-select"
               select
               label="Select Category"
               helperText={errorMessage}
               sx={{
                textAlign:'left',
                width: 'auto'
               }}
                >
                    {theOptionList.map((options) => (
                        <MenuItem key={options.value} value={options.value}> {options.label} </MenuItem>
                    ))}
              </TextField>
              <TextField
               id="outlined-helperText"
               label={category}
               helperText={errorMessage}
               />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Start Date" />
                </DemoContainer>
                <label>{errorMessage}</label>
                </LocalizationProvider>
                

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="End Date" sx={{color: 'red'}}/>
                </DemoContainer>
                <label>{errorMessage}</label>
                </LocalizationProvider>

               <Button sx={{
                backgroundColor: 'rgba(138, 172, 94, 1)'
               }} onClick={postContent}>POST</Button>
                </Stack>
            </Grid>    
            </Box>}
            {value === 1 && <Box p={2}>
                             <Grid xs={12}>
                <Stack spacing={2} sx={{
                    alignItems: 'center'
                }}>
                <Typography>Select Image and Add Description:</Typography>
                <TextField
                type="file"
                id="outlined-helperText"
                helperText={errorMessage}
                />
                <TextField
                id="outlined-helperText"
                label='Enter full description'
                multiline={true}
                rows={4}
                helperText={errorMessage}
                />
                <Button sx={{
                    backgroundColor: 'rgba(138, 172, 94, 1)'
                }} onClick={postAboutContent}>POST</Button>
                    </Stack>
                </Grid>  
                </Box>}
           
        </div>
    );
}

export default Developer;