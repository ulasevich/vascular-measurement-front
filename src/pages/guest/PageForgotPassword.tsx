import { 
    Button, 
    Grid, 
    TextField, 
    Typography 
} from "@mui/material";
import PageWrapper from "@components/page/PageWrapper";
import { Link } from "react-router-dom";

const PageForgotPassword = () => {
    return (
        <PageWrapper title="Забыли пароль?">
            <Typography mb={3} variant={'h3'} align="center">Система «Измерение сосудов»</Typography>
            <Typography mb={3} variant={'h1'} align="center">Забыли пароль?</Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        label="E-mail" 
                        variant="outlined" 
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained"
                        size="large"
                        fullWidth
                    >Восстановить</Button>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                    <Link to="/sign-in" className="no-decoration">Войти</Link>
                </Grid>
            </Grid>
        </PageWrapper>
    )
}

export default PageForgotPassword