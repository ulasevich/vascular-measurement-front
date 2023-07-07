import React from "react";
import { Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import TableSearchForm from "@components/table/TableSearchForm";


const TabClassifications = (): React.ReactElement => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs>
                    <TableSearchForm />
                </Grid>
                <Grid item xs="auto">
                    <Button 
                        variant="contained"
                        size="large"
                        title="Добавить классификацию"
                    >
                        <Add />
                    </Button>
                </Grid>
            </Grid>
            <div>Таблица классификаций</div>
        </>
    )
}

export default TabClassifications