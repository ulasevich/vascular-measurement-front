import React, { useState } from "react";
import { 
    Box, 
    Divider, 
    Grid, 
    IconButton, 
    Tabs, 
    Tab, 
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
                            <Grid item xs={6}>Угол бифуркации</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Угол"
                                    name="angle_bifurcation"
                                    value={props.currentPatient.angle_bifurcation || ''}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    disabled
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
                                    name="angle_BCA"
                                    value={props.currentPatient.angle_BCA || ''}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs="auto">
                                <IconButton type="button">
                                    <PushPinOutlined />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1} alignItems={"center"}>
                            <Grid item xs={6}>Угол отклонения НСА</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Угол"
                                    name="angle_HCA"
                                    value={props.currentPatient.angle_HCA || ''}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1} alignItems={"center"}>
                            <Grid item xs={6}>Диаметр ОСА</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Диаметр"
                                    name="diameter_OCA"
                                    value={props.currentPatient.diameter_OCA || ''}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1} alignItems={"center"}>
                            <Grid item xs={6}>Диаметр луковицы (max)</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Диаметр"
                                    name="diameter_bulb"
                                    value={props.currentPatient.diameter_bulb || ''}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container spacing={1} alignItems={"center"}>
                            <Grid item xs={6}>Диаметр ВСА</Grid>
                            <Grid item xs>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Диаметр"
                                    name="diameter_ВСА"
                                    value={props.currentPatient.diameter_ВСА || ''}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider sx={{mt: 2, mb: 2}} />

                    <Typography mb={3} variant={'h3'}>Расчетные параметры</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                size="small"
                                fullWidth
                                label="Дельта диаметра ОСА и диаметра луковицы"
                                name="calc_delta_OCA_bulb"
                                value={props.currentPatient.calc_delta_OCA_bulb || ''}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                size="small"
                                fullWidth
                                label="Дельта диаметра Луковицы и Диаметра ВСА"
                                name="calc_delta_bulb_ВСА"
                                value={props.currentPatient.calc_delta_bulb_ВСА || ''}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                size="small"
                                fullWidth
                                label="Дельта диаметра ОСА и Диаметра ВСА"
                                name="calc_delta_OCA_ВСА"
                                value={props.currentPatient.calc_delta_OCA_ВСА || ''}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                size="small"
                                fullWidth
                                label="Отношение диаметра Луковицы к диаметру ВСА"
                                name="calc_ratio_bulb_ВСА"
                                value={props.currentPatient.calc_ratio_bulb_ВСА || ''}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box hidden={currentPatentFormTab !== 1} sx={{mt: 2}}>
                    <Typography mb={3} variant={'h3'}>Классификации</Typography>
                    Списки

                    <Divider sx={{mt: 2, mb: 2}} />

                    <Typography mb={3} variant={'h3'}>Лечение</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                size="small"
                                fullWidth
                                label="Рекомендованное лечение"
                                name="treatment"
                                value={props.currentPatient.treatment || ''}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                multiline
                                disabled
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default FormPatientDetail