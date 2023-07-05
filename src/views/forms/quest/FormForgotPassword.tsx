import React from "react";
import { 
    Button, 
    Grid, 
    TextField
} from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form, FormikProps, Field } from 'formik';
import * as yup from 'yup';

const FormForgotPassword = (): React.ReactElement => {
    
    type FormForgotPasswordProps = {
        user_email: string
    }

    const initialValues = {
        user_email: "",
    }

    const FormForgotPasswordSchema = yup.object().shape({ 
        user_email: yup
            .string()
            .email('E-mail некорректный')
            .required('Введите E-mail')
    });

    const handleFormSignInSubmit = (values: FormForgotPasswordProps, actions: any) => {
        //setSubmitted(true);
        console.log({ values, actions });
        alert("DONE! \n" + JSON.stringify(values));
        actions.setSubmitting(false);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={FormForgotPasswordSchema}
            onSubmit={handleFormSignInSubmit}
        >
            {(props: FormikProps<FormForgotPasswordProps>) => {
                const {
                    touched,
                    dirty,
                    isValid,
                    errors,
                } = props
                return (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Field 
                                    as={TextField}
                                    name="user_email"
                                    label="Ваш E-mail" 
                                    variant="outlined" 
                                    fullWidth 
                                    error={Boolean(errors.user_email) && Boolean(touched.user_email)}
                                    helperText={Boolean(touched.user_email) && errors.user_email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    type="submit"
                                    disabled={!dirty || !isValid}
                                >Восстановить</Button>
                            </Grid>
                            <Grid item xs={12} textAlign={"center"}>
                                <Link to="/sign-in" className="no-decoration">Авторизоваться</Link>
                            </Grid>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormForgotPassword