import React, { useState } from "react";
import PageWrapper from "@components/page/PageWrapper";
import { 
    Button, 
    Grid, 
    Typography,
    Tabs, 
    Tab
} from "@mui/material";
import { Add } from "@mui/icons-material";
import TableSearchForm from "@components/table/TableSearchForm";


const PageSettings = () => {
    const [currentSettingsTab, setCurrentSettingsTab] = useState(0);

    const handlePatentFormTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentSettingsTab(newValue);
    };

    return (
        <PageWrapper title="Настройки">
            <Grid container spacing={2} mb={3}>
                <Grid item xs>
                    <Typography variant={'h1'}>Настройки</Typography>
                </Grid>
            </Grid>

            <Tabs 
                value={currentSettingsTab} 
                onChange={handlePatentFormTabChange} 
                sx={{mb: 2}}
            >
                <Tab label="Классификации" value={0} />
                <Tab label="Варианты лечения" value={1} />
            </Tabs>

            {currentSettingsTab === 0 && (
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
            )}
            
            {currentSettingsTab === 1 && (
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
            )}
            
        </PageWrapper>
    )
}

export default PageSettings