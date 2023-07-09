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
    Box,
    LinearProgress
} from "@mui/material";


type DataTableProps = {
    isLoading: boolean;
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
        <Box sx={{p: 1, width: 1}}>
            <Grid container spacing={1} alignItems={"center"}>
                <Grid item sm xs={12}>
                    <Pagination
                        page={page + 1}
                        count={pageCount}
                        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
                            apiRef.current.setPage(value - 1)
                        }
                    />
                </Grid>
                <Grid item sm="auto" xs>
                    Всего строк: {totalRows} 
                </Grid>
                <Grid item sm="auto">
                    Строк на странице
                </Grid>
                <Grid item sm="auto">
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
                                <MenuItem value={size} key={size}>{size}</MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
            </Grid>
        </Box>
    );
}

const dataGridSx = {
    borderRadius: "6px",
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#e7ecef",
        color: "#6E7C87",
        fontSize: 14
    },
    "& .MuiDataGrid-virtualScroller": {
        minHeight: "300px",
    },
    "& .MuiDataGrid-row:nth-of-type(odd)": {
        backgroundColor: "#FFFFFF",
    },
    "& .MuiDataGrid-row:hover": {
        backgroundColor: "#D0E0EE",
    },
    "& .MuiDataGrid-footerContainer": {
        backgroundColor: "#FFFFFF",
        color: "#6E7C87"
    }
}

const DataTable = (props: DataTableProps): React.ReactElement => {
    return (
        <DataGrid
            loading={props.isLoading}
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
                loadingOverlay: LinearProgress
            }}
            //checkboxSelection
            disableRowSelectionOnClick
            localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        />
    );
};

export default DataTable;
