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
    Grid, 
    Pagination, 
    Select, 
    MenuItem, 
    SelectChangeEvent,
    Box
} from "@mui/material";


type DataTableProps = {
    rows: any;
    columns: GridColDef[];
}

const pageSizeOptions = [5, 25, 50, 100]; // больше 100 на странице компонент x-data-grid не позволяет

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
                        defaultValue={String(pageSizeOptions[0])} 
                        size="small"
                        sx={{fontSize: 14}}
                    >
                        {pageSizeOptions.map(function(size) {
                            return (
                                <MenuItem value={size}>{size}</MenuItem>
                            )
                        })}
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

const DataTable = (props: DataTableProps): React.ReactElement => {
    return (
        <DataGrid
            rows={props.rows}
            columns={props.columns}
            sx={dataGridSx}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: pageSizeOptions[0],
                    },
                },
            }}
            slots={{
                pagination: CustomPagination,
            }}
            //checkboxSelection
            disableRowSelectionOnClick
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        />
    );
};

export default DataTable;
