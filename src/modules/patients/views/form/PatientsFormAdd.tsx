import React, { useRef, useState } from "react";
import { 
    Box,
    Button,
    Grid,
    IconButton,
    TextField 
} from "@mui/material";
import {
    AddAPhotoOutlined, DeleteOutlined
} from "@mui/icons-material";
import { Formik, Form, FormikProps, Field } from 'formik';
import * as yup from 'yup';
import { usePatientsStore, NewPatientProps } from "@modules/patients";


const PatientsFormAdd = (): React.ReactElement => {
    const newPatient = usePatientsStore(state => state.newPatient);
    const setModalPatientAddOpen = usePatientsStore(state => state.actions.setModalPatientAddOpen);
    const addPatient = usePatientsStore(state => state.actions.addPatient);
    const setModalPatientDetailOpen = usePatientsStore(state => state.actions.setModalPatientDetailOpen);
    const setCurrentPatientReadOnly = usePatientsStore(state => state.actions.setCurrentPatientReadOnly);
    
    const [attachment, setAttachment] = useState(Object);
    const inputFileFef = useRef<HTMLInputElement>(null);
    
    const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }
        console.log("Загрузка снимка", event.target.files);
        setAttachment(event.target.files[0]);
    };

    const patientsFormAddSchema = yup.object().shape({ 
        externalId: yup.string().required('Введите внешний Id'),
        description: yup.string().required('Введите описание'),
    });

    const handlePatientsFormAddSubmit = (values: NewPatientProps, actions: any) => {
        console.log({ values, actions });
        addPatient(values);
        actions.setSubmitting(false);
        actions.resetForm();
        setModalPatientAddOpen(false);
        setModalPatientDetailOpen(true);
        setCurrentPatientReadOnly(false);
    };

    return (
        <Formik
            initialValues={newPatient}
            validationSchema={patientsFormAddSchema}
            onSubmit={handlePatientsFormAddSubmit}
        >
            {(props: FormikProps<NewPatientProps>) => {
                const {
                    touched,
                    dirty,
                    isValid,
                    errors,
                } = props
                return (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Внешний ID"
                                    name="externalId"
                                    error={Boolean(errors.externalId) && Boolean(touched.externalId)}
                                    helperText={Boolean(touched.externalId) && errors.externalId}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    type="text"
                                    size="small"
                                    fullWidth
                                    label="Описание"
                                    name="description"
                                    multiline
                                    rows={4}
                                    error={Boolean(errors.description) && Boolean(touched.description)}
                                    helperText={Boolean(touched.description) && errors.description}
                                />
                            </Grid>
                            <Grid item container xs={12} alignItems={"center"}>
                                <Grid item xs>
                                    <Button 
                                        variant="text"
                                        size="large"
                                        type="button"
                                        color="secondary"
                                        startIcon={<AddAPhotoOutlined />}
                                        onClick={()=>inputFileFef.current?.click()}
                                        //disabled={!dirty || !isValid}
                                    >
                                        {attachment.name ?? "Загрузить снимок"}
                                    </Button>
                                    <TextField
                                        inputRef={inputFileFef}
                                        type="file"
                                        name="fileScan"
                                        onChange={handleInputFileChange}
                                        sx={{display: "none"}}
                                        //value={currentPatient.angle_bifurcation || ''}
                                    />
                                </Grid>
                                {attachment.name ?
                                <Grid item xs="auto">
                                    <IconButton type="button" sx={{color: "red"}}>
                                        <DeleteOutlined />
                                    </IconButton>
                                </Grid>
                                : <></>
                                }
                            </Grid>
                            <Grid item xs={12} alignContent={"center"}>
                                <Box sx={{display: "flex", gap: 2, justifyContent: "center"}}>
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        type="submit"
                                        disabled={!dirty || !isValid}
                                    >
                                        Далее
                                    </Button>
                                    <Button 
                                        variant="outlined"
                                        size="large"
                                        color="secondary"
                                        onClick={() => setModalPatientAddOpen(false)}
                                    >
                                        Отменить
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PatientsFormAdd