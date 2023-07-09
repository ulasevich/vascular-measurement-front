import React, { useState } from "react";
import { 
    Box, 
    Divider, 
    Grid, 
    IconButton, 
    Tabs, 
    Tab, 
    TextField, 
    Typography, 
    Button
} from "@mui/material";
import { PushPinOutlined } from "@mui/icons-material";
import { Formik, Form, FormikProps, Field } from 'formik';
import * as yup from 'yup';
import { usePatientsStore, PatientProps } from "@modules/patients";


const PatientsFormDetail = (): React.ReactElement => {
    const currentPatient = usePatientsStore(state => state.currentPatient);
    const isCurrentPatientReadOnly = usePatientsStore(state => state.isCurrentPatientReadOnly);

    const setModalPatientDetailOpen = usePatientsStore(state => state.actions.setModalPatientDetailOpen);
    const setCurrentPatientReadOnly = usePatientsStore(state => state.actions.setCurrentPatientReadOnly);
    const updatePatient = usePatientsStore(state => state.actions.updatePatient);

    const [currentPatentFormDetailTab, setPatentFormDetailTab] = useState(0);

    const handlePatentFormDetailTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setPatentFormDetailTab(newValue);
    };

    const patientsFormDetailSchema = yup.object().shape({ 
        angle_bifurcation: yup.number().required('Введите Угол бифуркации'),
    });

    const handlePatientsFormDetailSubmit = (values: PatientProps, actions: any) => {
        //console.log({ values, actions });
        //updatePatient(values);
        actions.setSubmitting(false);
        actions.resetForm();
        updatePatient(values);
        setModalPatientDetailOpen(false);
        setCurrentPatientReadOnly(true);
    };

    return (

        <Formik
            initialValues={currentPatient}
            validationSchema={patientsFormDetailSchema}
            onSubmit={handlePatientsFormDetailSubmit}
        >
            {(props: FormikProps<PatientProps>) => {
                const {
                    touched,
                    dirty,
                    isValid,
                    errors,
                } = props
                return (
                    <Form>
                        <Grid container spacing={3}>
                            
                            <Grid item md={7} xs={12}>
                                Снимок
                            </Grid>

                            <Grid item md={5} xs={12}>
                                <Tabs 
                                    value={currentPatentFormDetailTab} 
                                    onChange={handlePatentFormDetailTabChange} 
                                    variant="fullWidth"
                                >
                                    <Tab label="Параметры" value={0} />
                                    <Tab label="Классификации" value={1} />
                                </Tabs>

                                <Box hidden={currentPatentFormDetailTab !== 0} sx={{mt: 2}}>
                                    <Typography mb={3} variant={'h3'}>Параметры снимка</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Угол бифуркации</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Угол"
                                                    name="angle_bifurcation"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                    error={Boolean(errors.angle_bifurcation) && Boolean(touched.angle_bifurcation)}
                                                    helperText={Boolean(touched.angle_bifurcation) && errors.angle_bifurcation}
                                                />
                                            </Grid>
                                            {!isCurrentPatientReadOnly &&
                                            <Grid item xs="auto">
                                                <IconButton type="button">
                                                    <PushPinOutlined />
                                                </IconButton>
                                            </Grid>
                                            }
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Угол отклонения ВСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Угол"
                                                    name="angle_BCA"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                            {!isCurrentPatientReadOnly &&
                                            <Grid item xs="auto">
                                                <IconButton type="button">
                                                    <PushPinOutlined />
                                                </IconButton>
                                            </Grid>
                                            }
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Угол отклонения НСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Угол"
                                                    name="angle_HCA"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                            {!isCurrentPatientReadOnly &&
                                            <Grid item xs="auto">
                                                <IconButton type="button">
                                                    <PushPinOutlined />
                                                </IconButton>
                                            </Grid>
                                            }
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Диаметр ОСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Диаметр"
                                                    name="diameter_OCA"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                            {!isCurrentPatientReadOnly &&
                                            <Grid item xs="auto">
                                                <IconButton type="button">
                                                    <PushPinOutlined />
                                                </IconButton>
                                            </Grid>
                                            }
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Диаметр луковицы (max)</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Диаметр"
                                                    name="diameter_bulb"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                            {!isCurrentPatientReadOnly &&
                                            <Grid item xs="auto">
                                                <IconButton type="button">
                                                    <PushPinOutlined />
                                                </IconButton>
                                            </Grid>
                                            }
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Диаметр ВСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Диаметр"
                                                    name="diameter_ВСА"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                            {!isCurrentPatientReadOnly &&
                                            <Grid item xs="auto">
                                                <IconButton type="button">
                                                    <PushPinOutlined />
                                                </IconButton>
                                            </Grid>
                                            }
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{mt: 2, mb: 2}} />

                                    <Typography mb={3} variant={'h3'}>Расчетные параметры</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Дельта диаметра ОСА и диаметра луковицы</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Дельта"
                                                    name="calc_delta_OCA_bulb"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Дельта диаметра Луковицы и Диаметра ВСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Дельта"
                                                    name="calc_delta_bulb_ВСА"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Дельта диаметра ОСА и Диаметра ВСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Дельта"
                                                    name="calc_delta_OCA_ВСА"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item container spacing={1} alignItems={"center"}>
                                            <Grid item xs={6}>Отношение диаметра Луковицы к диаметру ВСА</Grid>
                                            <Grid item xs>
                                                <Field
                                                    as={TextField}
                                                    type="text"
                                                    size="small"
                                                    fullWidth
                                                    label="Дельта"
                                                    name="calc_ratio_bulb_ВСА"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    disabled={isCurrentPatientReadOnly}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box hidden={currentPatentFormDetailTab !== 1} sx={{mt: 2}}>
                                    <Typography mb={3} variant={'h3'}>Классификации</Typography>
                                    Списки

                                    <Divider sx={{mt: 2, mb: 2}} />

                                    <Typography mb={3} variant={'h3'}>Лечение</Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                as={TextField}
                                                type="text"
                                                size="small"
                                                fullWidth
                                                label="Рекомендованное лечение"
                                                name="treatment"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                multiline
                                                disabled={isCurrentPatientReadOnly}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            
                            {!isCurrentPatientReadOnly &&
                            <Grid item xs={12} alignContent={"center"}>
                                <Box sx={{display: "flex", gap: 2, justifyContent: "center"}}>
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                        disabled={!dirty || !isValid}
                                    >
                                        Сохранить
                                    </Button>
                                    <Button 
                                        variant="outlined"
                                        size="large"
                                        color="secondary"
                                        onClick={() => setModalPatientDetailOpen(false)}
                                    >
                                        Отменить
                                    </Button>
                                </Box>
                            </Grid>
                            }

                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PatientsFormDetail