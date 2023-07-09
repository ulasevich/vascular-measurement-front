import React, { useEffect, useState } from "react";
import { 
    IconButton, 
    ListItemIcon, 
    ListItemText, 
    Menu, 
    MenuItem
} from "@mui/material";
import { 
    AssignmentOutlined, 
    CreateOutlined, 
    FolderZipOutlined, 
    HealthAndSafetyOutlined, 
    MoreHorizOutlined 
} from "@mui/icons-material";
import {
    GridColDef,
    GridValueGetterParams
} from "@mui/x-data-grid";
import DataTable from "@components/table/DataTable";
import TableSearchForm from "@components/table/TableSearchForm";
import { usePatientsStore, type PatientProps } from "@modules/patients";



const PatientsTable = (): React.ReactElement => {
    const patients = usePatientsStore(state => state.patients);
    const currentPatient = usePatientsStore(state => state.currentPatient);

    const setCurrentPatient = usePatientsStore(state => state.actions.setCurrentPatient);
    const setModalPatientDetailOpen = usePatientsStore(state => state.actions.setModalPatientDetailOpen);
    const setCurrentPatientReadOnly = usePatientsStore(state => state.actions.setCurrentPatientReadOnly);
    const fetchPatients = usePatientsStore(state => state.actions.fetchPatients);


    const [tableRowMenuAnchorEl, setTableRowMenuAnchorEl] = useState<null | HTMLElement>(null);
    const tableRowMenuIsOpen = Boolean(tableRowMenuAnchorEl);

    const handleClickPatientView = (row: PatientProps, isReadOnly: boolean) => {
        setCurrentPatient(row);
        setModalPatientDetailOpen(true);
        setCurrentPatientReadOnly(isReadOnly);
    }

    const handleTableRowMenuClick = (event: React.MouseEvent<HTMLButtonElement>, row: PatientProps) => {
        setCurrentPatient(row);
        setTableRowMenuAnchorEl(event.currentTarget);
    };
    
    const handleTableRowMenuClose = () => {
        setTableRowMenuAnchorEl(null);
    };

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
            description: "Расчетные параметры снимка",
            minWidth: 200,
            valueGetter: (params: GridValueGetterParams) => 
                `${params.row.calc_delta_OCA_bulb || '_'}/${params.row.calc_delta_bulb_ВСА || '_'}/${params.row.calc_delta_OCA_ВСА || '_'}/${params.row.calc_ratio_bulb_ВСА || '_'}`
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
                    <IconButton type="button" onClick={() => handleClickPatientView(params.row, true)}>
                        <AssignmentOutlined />
                    </IconButton>
                    <IconButton type="button" onClick={(event) => handleTableRowMenuClick(event, params.row)}>
                        <MoreHorizOutlined />
                    </IconButton>
                </>
            ),
            sortable: false,
            disableColumnMenu: true,
            align: "right"
        },
    ];
    
    useEffect(() => {
        fetchPatients();
    }, [fetchPatients]);

    return (
        <>
            <TableSearchForm />

            <DataTable 
                rows={patients}
                columns={patientsColumns}
            />

            <Menu
                anchorEl={tableRowMenuAnchorEl}
                open={tableRowMenuIsOpen}
                onClose={handleTableRowMenuClose}
                disableScrollLock={true}
            >
                <MenuItem onClick={() => handleClickPatientView(currentPatient, false)}>
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
        </>
    )
}

export default PatientsTable