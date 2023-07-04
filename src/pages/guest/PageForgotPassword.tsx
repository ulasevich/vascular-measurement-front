import { 
    Typography 
} from "@mui/material";
import PageWrapper from "@components/page/PageWrapper";
import { APP_NAME } from "@constants/appConstants";
import FormForgotPassword from "@views/forms/quest/FormForgotPassword";

const PageForgotPassword = () => {
    return (
        <PageWrapper title="Забыли пароль?">
            <Typography mb={3} variant={'h3'} align="center">{APP_NAME}</Typography>
            <Typography mb={3} variant={'h1'} align="center">Забыли пароль?</Typography>
            <Typography mb={3} variant={'h3'} align="center">Введите E-mail для восстановления</Typography>

            <FormForgotPassword />
        </PageWrapper>
    )
}

export default PageForgotPassword