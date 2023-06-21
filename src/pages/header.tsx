import { Box, Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function Header() {
   return (
      <Box sx={{
         backgroundColor: 'rgba(93, 112, 141, 0.9333)'
      }}>
      <div>
         <Grid container spacing={2}>
           <Grid item xs={12}>
            <Box sx={{
               display: 'flex',
               justifyContent: 'flex-start',
               marginLeft: 10,
               padding: 1
            }}>
            <Typography variant='h5' sx={{color: 'brown'}}>Kemboi's Portfolio</Typography>
            </Box>
           </Grid>
           <Grid item xs={12}>
            <Box sx={{
               backgroundColor: 'rgba(217, 217, 217, 1)',
               display: 'flex',
               width: 'auto',
               padding: 1,
               justifyContent: 'flex-end'
            }}>
            <Stack spacing={2} direction={'row'}>
               <Button sx={{backgroundColor: 'rgba(93, 112, 141, 0.9333)', color: 'white', '&:hover': {backgroundColor: 'red'} }}>About</Button>
               <Button sx={{backgroundColor: 'rgba(93, 112, 141, 0.9333)', color: 'white', '&:hover': {backgroundColor: 'red'} }}>Education</Button>
               <Button sx={{backgroundColor: 'rgba(93, 112, 141, 0.9333)', color: 'white', '&:hover': {backgroundColor: 'red'} }}>Experience</Button>
            </Stack>
            </Box>
           </Grid>
         </Grid>
      </div>
      </Box>
   ); 
}

export default Header;