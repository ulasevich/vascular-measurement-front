import React from "react";
import { 
    Button, 
    Grid, 
    Typography
} from "@mui/material";
import {
    Add,
} from '@mui/icons-material';
import { usePatientsStore } from "@modules/patients";

const PatientsHeading = (): React.ReactElement => {
    const setModalPatientAddOpen = usePatientsStore(state => state.actions.setModalPatientAddOpen);

    return (
        <Grid container spacing={2} mb={3}>
            <Grid item xs>
                <Typography variant={'h1'}>Реестр пациентов</Typography>
            </Grid>
            <Grid item xs="auto">
                <Button 
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() => setModalPatientAddOpen(true)}
                >
                    Добавить запись
                </Button>
            </Grid>
        </Grid>
    )
}

export default PatientsHeading