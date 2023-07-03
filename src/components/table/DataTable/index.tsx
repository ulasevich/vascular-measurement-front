import React from "react";
import { 
    DataGrid, 
    GridColDef, 
    ruRU,
    useGridApiContext,
    useGridSelector,
    gridPageSelector,
    gridPageCountSelector,
    gridFilteredTopLevelRowCountSelector
} from "@mui/x-data-grid";
import { 
    Button, 
    Grid, 
    Pagination, 
    Select, 
    MenuItem, 
    SelectChangeEvent,
    Box
} from "@mui/material";
import { rows } from "./testData";


const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    const totalRows = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);

    return (
        <Box sx={{pl: 1, pr: 1, width: 1}}>
            <Grid container columnSpacing={2} alignItems={"center"}>
                <Grid item xs>
                    <Pagination
                        page={page + 1}
                        count={pageCount}
                        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
                            apiRef.current.setPage(value - 1)
                        }
                    />
                </Grid>
                <Grid item xs="auto">
                    Всего строк: {totalRows} 
                </Grid>
                <Grid item xs="auto">
                    Строк на странице
                </Grid>
                <Grid item xs="auto">
                    <Select 
                        onChange={(event: SelectChangeEvent) =>
                            apiRef.current.setPageSize(Number(event.target.value))
                        } 
                        defaultValue="5" 
                        size="small"
                        sx={{fontSize: 14}}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </Box>
    );
}

const dataGridSx = {
    borderRadius: '6px',
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#e7ecef",
        color: "#6E7C87",
        fontSize: 14
    },
    "& .MuiDataGrid-row:nth-child(odd)": {
        backgroundColor: "#FFFFFF",
    },
    "& .MuiDataGrid-footerContainer": {
        backgroundColor: "#FFFFFF",
    }
}

const columns: GridColDef[] = [
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
            <Button 
                variant="outlined" 
                color="secondary"
            >
                btn {params.row.age}
            </Button>
            </>
        ),
        sortable: false,
        disableColumnMenu: true,
        align: "right"
    },
];


const DataTable = (): React.ReactElement => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            sx={dataGridSx}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            slots={{
                pagination: CustomPagination,
            }}
            pageSizeOptions={[5, 25, 50, 100]}
            //checkboxSelection
            disableRowSelectionOnClick
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        />
    );
};

export default DataTable;
