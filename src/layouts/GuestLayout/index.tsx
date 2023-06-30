import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import FormPaper from '@components/container/FormPaper';

const GuestLayout = () => {
    return (
        <div className="app-page">
            <main className="app-page-main app-page-main--align-center">
                <Container maxWidth="md">
                    <FormPaper>
                        <Container maxWidth="xs">
                            <Outlet />
                        </Container>
                    </FormPaper>
                </Container>
            </main>
        </div>
    )
}

export default GuestLayout