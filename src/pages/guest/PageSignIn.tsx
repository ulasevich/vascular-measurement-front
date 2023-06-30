import { 
    Button, 
    Checkbox, 
    FormControlLabel, 
    Grid, 
    TextField, 
    Typography 
} from "@mui/material";
import PageWrapper from "@components/page/PageWrapper";
import { Link } from "react-router-dom";


const PageSignIn = () => {
    return (
        <PageWrapper title="Авторизация">
            <Typography mb={3} variant={'h3'} align="center">Система «Измерение сосудов»</Typography>
            <Typography mb={3} variant={'h1'} align="center">Авторизация</Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        label="E-mail" 
                        variant="outlined" 
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="Пароль" 
                        variant="outlined" 
                        fullWidth 
                        type="password"
                    />
                </Grid>
                <Grid item xs>
                    <FormControlLabel
                        control={
                        <Checkbox name="remember-me" />
                        }
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
                    >Войти</Button>
                </Grid>
            </Grid>
        </PageWrapper>
    )
}

export default PageSignIn