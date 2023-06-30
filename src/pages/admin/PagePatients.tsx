import React from "react";
import PageWrapper from "@components/page/PageWrapper";
import { Button, Grid, Typography } from "@mui/material";

const PagePatients = () => {
    return (
        <PageWrapper title="Реестр пациентов">
            <Grid container columnSpacing={2}>
                <Grid item xs>
                    <Typography variant={'h1'}>Реестр пациентов</Typography>
                </Grid>
                <Grid item xs="auto">
                    <Button variant="contained">Добавить запись</Button>
                </Grid>
                <Grid item xs="auto">
                    <Button variant="outlined">Настройки</Button>
                </Grid>
            </Grid>
            <div>
                <h1>Реестр пациентов</h1>
                <p>PagePatientsRegistry PagePatientsRegistry PagePatientsRegistry</p>
            </div>
        </PageWrapper>
    )
}

export default PagePatients