import { useState } from "react";
import { 
    Button, 
    Grid, 
    IconButton, 
    Typography
} from "@mui/material";
import {
    Add,
    AssignmentOutlined,
    MoreHorizOutlined,
    Tune
} from '@mui/icons-material';
import { GridColDef } from "@mui/x-data-grid";
import PageWrapper from "@components/page/PageWrapper";
import TableSearchForm from "@components/table/TableSearchForm";
import DataTable from "@components/table/DataTable";
import AppModal from "@components/modal/AppModal";
import { patientRows, tablePatientsRowProps } from "@components/table/DataTable/testData";


const PagePatients = () => {
    const [isPatientViewOpen, setPatientViewOpen] = useState(false);
    const [currentRow, setCurrentRow] = useState<tablePatientsRowProps>(Object);

    const patientColumns: GridColDef[] = [
        { 
            field: "id", 
            headerName: "ID" 
        },
        {
            field: "externalId",
            headerName: "Внешний ID",
            //editable: true,
        },
        {
            field: "description",
            headerName: "Описание",
            minWidth: 150,
            flex: 1
        },
        {
            field: "parameters",
            headerName: "Параметры",
            description: "Развернутое описание колонки Параметры",
            minWidth: 220
        },
        {
            field: "calc_parameters",
            headerName: "Расчетные параметры",
            description: "Развернутое описание колонки Расчетные параметры",
            minWidth: 200
        },
        {
            field: "classifier",
            headerName: "Классификатор",
            description: "Развернутое описание колонки Классификатор",
            minWidth: 200
        },
        {
            field: "treatment",
            headerName: "Реком. лечение",
            flex: 1
        },
        {
            field: "doctor",
            headerName: "Доктор",
            minWidth: 200
        },
        {
            field: "controls",
            headerName: "",
            renderCell:params=>(
                <>
                    <IconButton type="button" onClick={() => handleClickPatientView(params)}>
                        <AssignmentOutlined />
                    </IconButton>
                    <IconButton type="button">
                        <MoreHorizOutlined />
                    </IconButton>
                </>
            ),
            sortable: false,
            disableColumnMenu: true,
            align: "right"
        },
    ];
    
    const handleClickPatientView = (params: any) => {
        console.log(params);
        setCurrentRow(params.row);
        setPatientViewOpen(true);
    }

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

            <DataTable 
                rows={patientRows}
                columns={patientColumns}
            />

            <AppModal
                title={currentRow.externalId}
                open={isPatientViewOpen}
                handleModalopen={setPatientViewOpen}
                maxWidth="md"
            >
                <div>{currentRow.description}</div>
            </AppModal>

        </PageWrapper>
    )
}

export default PagePatients