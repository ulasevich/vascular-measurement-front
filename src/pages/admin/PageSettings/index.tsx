import React, { useState } from "react";
import PageWrapper from "@components/page/PageWrapper";
import { 
    Grid, 
    Typography,
    Tabs, 
    Tab
} from "@mui/material";
import TabClassifications from "./TabClassifications";
import TabTreatment from "./TabTreatment";


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
                <TabClassifications />
            )}
            
            {currentSettingsTab === 1 && (
                <TabTreatment />
            )}
            
        </PageWrapper>
    )
}

export default PageSettings