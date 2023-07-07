import React from "react";
import { Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import TableSearchForm from "@components/table/TableSearchForm";


const TabTreatment = (): React.ReactElement => {
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
                        title="Добавить вариант лечения"
                    >
                        <Add />
                    </Button>
                </Grid>
            </Grid>
            <div>Таблица вариантов лечения</div>
        </>
    )
}

export default TabTreatment