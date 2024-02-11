import React from 'react'
import { Box, Grid, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
function MuiTest() {
    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];
    function change(e) {
        console.log(e.target.value);
    }
    return (
        <Grid container>
            <Grid item xs={8}>
                <Box sx={{ width: 300 }}>
                    iti
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ width: 300 }}>
                    iti
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ width: 300 }}>
                    iti
                </Box>

            </Grid>
        </Grid>


    )
}

export default MuiTest