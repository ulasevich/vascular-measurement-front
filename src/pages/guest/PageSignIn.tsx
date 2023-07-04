import { useState } from 'react';
import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Grid, 
    TextField, 
    Typography 
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FormikProps, Field } from 'formik';
import * as yup from 'yup';
import PageWrapper from "@components/page/PageWrapper";
import { APP_NAME } from '@constants/appConstants';


const PageSignIn = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    type FormSignInProps = {
        user_email: string
        user_password: string
    }

    const initialValues = {
        user_email: "",
        user_password: ""
    }

    const formSignInSchema = yup.object().shape({ 
        user_email: yup
            .string()
            .email('E-mail некорректный')
            .required('Введите E-mail'),
        user_password: yup.string().trim().required('Введите пароль'),
    });

    const handleFormSignInSubmit = (values: FormSignInProps, actions: any) => {
        setSubmitted(true);
        console.log({ values, actions });
        alert("Вы авторизованы и через  пару секунд попадете в админку \n" + JSON.stringify(values));
        actions.setSubmitting(false);
        actions.resetForm();
        setTimeout(() => {
            navigate('/admin');
        }, 2000);
    };

    return (
        <PageWrapper title="Авторизация">
            <Typography mb={3} variant={'h3'} align="center">{APP_NAME}</Typography>
            <Typography mb={3} variant={'h1'} align="center">Авторизация</Typography>
            
            <Formik
                initialValues={initialValues}
                validationSchema={formSignInSchema}
                onSubmit={handleFormSignInSubmit}
            >
                {(props: FormikProps<FormSignInProps>) => {
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
                                        label="E-mail" 
                                        variant="outlined" 
                                        fullWidth 
                                        error={Boolean(errors.user_email) && Boolean(touched.user_email)}
                                        helperText={Boolean(touched.user_email) && errors.user_email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="user_password"
                                        label="Пароль" 
                                        variant="outlined" 
                                        fullWidth 
                                        type="password"
                                        error={Boolean(errors.user_password) && Boolean(touched.user_password)}
                                        helperText={Boolean(touched.user_password) && errors.user_password}
                                    />
                                </Grid>
                                <Grid item xs>
                                    <FormControlLabel
                                        control={<Checkbox name="remember-me" />}
                                        label="Запомнить меня"
                                    />
                                </Grid>
                                <Grid item xs={"auto"} alignSelf={"center"}>
                                    <Link to="/forgot-password" className="no-decoration">Забыли пароль?</Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        type="submit"
                                        disabled={!dirty || !isValid}
                                    >Войти</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )
                }}
            </Formik>

        </PageWrapper>
    )
}

export default PageSignIn