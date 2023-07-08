import React from "react";
import { 
    Button, 
    Grid, 
    Typography
} from "@mui/material";
import {
    Add,
} from '@mui/icons-material';

const PatientsHeading = (): React.ReactElement => {
    return (
        <Grid container spacing={2} mb={3}>
            <Grid item xs>
                <Typography variant={'h1'}>Реестр пациентов</Typography>
            </Grid>
            <Grid item xs="auto">
                <Button 
                    variant="contained"
                    startIcon={<Add />}
                >
                    Добавить запись
                </Button>
            </Grid>
            {/* <Grid item xs="auto">
                <Button 
                    variant="outlined" 
                    color="secondary"
                    startIcon={<Tune />}
                >
                    Настройки
                </Button>
            </Grid> */}
        </Grid>
    )
}

export default PatientsHeading