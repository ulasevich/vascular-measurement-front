
import { Typography } from "@mui/material";
import PageWrapper from "@components/page/PageWrapper";
import { APP_NAME } from '@constants/appConstants';
import FormSignIn from '@modules/authentication/views/FormSignIn';


const PageSignIn = () => {

    return (
        <PageWrapper title="Авторизация">
            <Typography mb={3} variant={'h3'} align="center">{APP_NAME}</Typography>
            <Typography mb={3} variant={'h1'} align="center">Авторизация</Typography>
            
            <FormSignIn />
        </PageWrapper>
    )
}

export default PageSignIn