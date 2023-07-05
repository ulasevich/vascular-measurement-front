import React, { useState } from "react";
import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Grid, 
    IconButton, 
    TextField
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FormikProps, Field } from 'formik';
import * as yup from 'yup';
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FormSignIn = (): React.ReactElement => {
    const navigate = useNavigate();
    //const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
        //setSubmitted(true);
        console.log({ values, actions });
        alert("Вы авторизованы и через  пару секунд попадете в админку \n" + JSON.stringify(values));
        actions.setSubmitting(false);
        actions.resetForm();
        setTimeout(() => {
            navigate('/admin');
        }, 2000);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
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
                                    type={showPassword ? 'text' : 'password'}
                                    error={Boolean(errors.user_password) && Boolean(touched.user_password)}
                                    helperText={Boolean(touched.user_password) && errors.user_password}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                title="Изменить видимость пароля"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        )
                                    }}
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
    )
}

export default FormSignIn