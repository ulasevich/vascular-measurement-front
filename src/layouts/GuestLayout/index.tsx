import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import GuestFormPaper from '@components/container/GuestFormPaper';

const GuestLayout = () => {
    return (
        <div className="app-page app-page--guest">
            <main className="app-page-main app-page-main--align-center">
                <Container maxWidth="md">
                    <GuestFormPaper>
                        <Container maxWidth="xs">
                            <Outlet />
                        </Container>
                    </GuestFormPaper>
                </Container>
            </main>
        </div>
    )
}

export default GuestLayout