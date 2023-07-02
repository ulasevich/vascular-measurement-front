import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";


const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
        field: "firstName",
        headerName: "First name",
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        editable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        flex: 1
    },
    {
        field: "control",
        headerName: "Control",
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
        disableColumnMenu: true
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataTable = (): React.ReactElement => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                },
            }}
            pageSizeOptions={[5]}
            //checkboxSelection
            disableRowSelectionOnClick
        />
    );
};

export default DataTable;
