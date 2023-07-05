import React, { useState } from "react";
import { 
    Box, 
    Divider, 
    Grid, 
    IconButton, 
    Tab, 
    Tabs, 
    TextField, 
    Typography 
} from "@mui/material";
import { PushPinOutlined } from "@mui/icons-material";
import { tablePatientsRowProps } from "@components/table/DataTable/testData";

type FormPatientDetailProps = {
    currentPatient: tablePatientsRowProps;
}

const FormPatientDetail = (props: FormPatientDetailProps): React.ReactElement => {
    const [currentPatentFormTab, setPatentFormTab] = useState(0);

    const handlePatentFormTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setPatentFormTab(newValue);
    };

    return (
        <Grid container spacing={3}>
            <Grid item md={7} xs={12}>
                Снимок
            </Grid>
            <Grid item md={5} xs={12}>
                <Tabs 
                    value={currentPatentFormTab} 
                    onChange={handlePatentFormTabChange} 
                    variant="fullWidth"
                >
                    <Tab label="Параметры" value={0} />
                    <Tab label="Классификации" value={1} />
                </Tabs>
                <Box hidden={currentPatentFormTab !== 0} sx={{mt: 2}}>
                    <Typography mb={3} variant={'h3'}>Параметры снимка</Typography>
                    <Grid container spacing={2}>
                        <Grid item container spacing={1} alignItems={"center"}>
                            <Grid item xs={6}>Угол бифукации</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Угол"
                                    name="angle_bifurcation"
                                    value={props.currentPatient.externalId}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1} alignItems={"center"}>
                            <Grid item xs={6}>Угол отклонения ВСА</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Угол"
                                    name="angle_bifurcation"
                                    value={props.currentPatient.calc_parameters}
                                />
                            </Grid>
                            <Grid item xs="auto">
                                <IconButton type="button">
                                    <PushPinOutlined />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt: 2, mb: 2}} />
                    <Typography mb={3} variant={'h3'}>Расчетные параметры</Typography>
                </Box>
                <Box hidden={currentPatentFormTab !== 1} sx={{mt: 2}}>
                    <Typography mb={3} variant={'h3'}>Классификации</Typography>
                    123
                    <Divider sx={{mt: 2, mb: 2}} />
                    <Typography mb={3} variant={'h3'}>Лечение</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default FormPatientDetail