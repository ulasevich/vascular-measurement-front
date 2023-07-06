import React from "react";
import PageWrapper from "@components/page/PageWrapper";
import { 
    Button, 
    Grid, 
    Typography 
} from "@mui/material";
import { Add } from "@mui/icons-material";
import TableSearchForm from "@components/table/TableSearchForm";


const PageAdministration = () => {
    return (
        <PageWrapper title="Администрирование пользователей">
            <Grid container spacing={2} mb={3}>
                <Grid item xs>
                    <Typography variant={'h1'}>Администрирование пользователей</Typography>
                </Grid>
                <Grid item xs="auto">
                    <Button 
                        variant="contained"
                        startIcon={<Add />}
                    >
                        Добавить
                    </Button>
                </Grid>
            </Grid>

            <TableSearchForm />

            <div>Таблица пользователей</div>
        </PageWrapper>
    )
}

export default PageAdministration