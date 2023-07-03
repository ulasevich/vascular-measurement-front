import { 
    Button, 
    Grid, 
    Typography
} from "@mui/material";
import {
    Add,
    Tune
} from '@mui/icons-material';
import PageWrapper from "@components/page/PageWrapper";
import TableSearchForm from "@components/page/TableSearchForm";
import DataTable from "@components/table/DataTable";


const PagePatients = () => {
    return (
        <PageWrapper title="Реестр пациентов">
            <Grid container columnSpacing={2} mb={3}>
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
                <Grid item xs="auto">
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        startIcon={<Tune />}
                    >
                        Настройки
                    </Button>
                </Grid>
            </Grid>

            <TableSearchForm />

            <DataTable />

        </PageWrapper>
    )
}

export default PagePatients