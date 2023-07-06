import { useState } from "react";
import { 
    Button, 
    Grid, 
    IconButton, 
    ListItemIcon, 
    ListItemText, 
    Menu, 
    MenuItem, 
    Typography
} from "@mui/material";
import {
    Add,
    AssignmentOutlined,
    CreateOutlined,
    FolderZipOutlined,
    HealthAndSafetyOutlined,
    MoreHorizOutlined
} from '@mui/icons-material';
import {
    GridColDef,
    GridValueGetterParams
} from "@mui/x-data-grid";
import PageWrapper from "@components/page/PageWrapper";
import TableSearchForm from "@components/table/TableSearchForm";
import DataTable from "@components/table/DataTable";
import AppModal from "@components/modal/AppModal";
import { patientsRows, tablePatientsRowProps } from "@components/table/DataTable/testData";
import FormPatientDetail from "@views/forms/admin/FormPatientDetail";


const PagePatients = () => {
    const [currentPatient, setCurrentPatient] = useState<tablePatientsRowProps>(Object);

    const [isPatientViewOpen, setPatientViewOpen] = useState(false);

    const [tableRowMenuAnchorEl, setTableRowMenuAnchorEl] = useState<null | HTMLElement>(null);
    const tableRowMenuIsOpen = Boolean(tableRowMenuAnchorEl);

    const patientsColumns: GridColDef[] = [
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
            description: "Параметры снимка",
            minWidth: 220,
            valueGetter: (params: GridValueGetterParams) => 
                `${params.row.angle_bifurcation || '_'}°/${params.row.angle_BCA || '_'}°/${params.row.angle_HCA || '_'}°/${params.row.diameter_OCA || '_'}/${params.row.diameter_bulb || '_'}/${params.row.diameter_ВСА || '_'}`
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
            flex: 1,
            minWidth: 150
        },
        {
            field: "doctor",
            headerName: "Доктор",
            minWidth: 150
        },
        {
            field: "controls",
            headerName: "",
            renderCell:params=>(
                <>
                    <IconButton type="button" onClick={() => handleClickPatientView(params)}>
                        <AssignmentOutlined />
                    </IconButton>
                    <IconButton type="button" onClick={(event) => handleTableRowMenuClick(event, params)}>
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
        //console.log(params);
        setCurrentPatient(params.row);
        setPatientViewOpen(true);
    }

    const handleTableRowMenuClick = (event: React.MouseEvent<HTMLButtonElement>, params: any) => {
        setCurrentPatient(params.row);
        setTableRowMenuAnchorEl(event.currentTarget);
    };
    const handleTableRowMenuClose = () => {
        setTableRowMenuAnchorEl(null);
    };

    return (
        <PageWrapper title="Реестр пациентов">
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

            <TableSearchForm />

            <DataTable 
                rows={patientsRows}
                columns={patientsColumns}
            />

            <AppModal
                title={`Пациент (внешний ID: ${currentPatient.externalId})`}
                open={isPatientViewOpen}
                handleModalopen={setPatientViewOpen}
                maxWidth={"xl"}
            >
                <FormPatientDetail
                    currentPatient={currentPatient}
                />
            </AppModal>

            <Menu
                anchorEl={tableRowMenuAnchorEl}
                open={tableRowMenuIsOpen}
                onClose={handleTableRowMenuClose}
                disableScrollLock={true}
            >
                <MenuItem>
                    <ListItemIcon>
                        <CreateOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Редактирование</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <HealthAndSafetyOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Лечение</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <FolderZipOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Архивирование</ListItemText>
                </MenuItem>
            </Menu>

        </PageWrapper>
    )
}

export default PagePatients