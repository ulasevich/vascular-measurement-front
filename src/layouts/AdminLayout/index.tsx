import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import ProfileMenu from '@components/layout/ProfileMenu';
import MainMenu from '@components/layout/MainMenu';


const AdminLayout = () => {
    return (
        <div className="app-page">
            <header className="app-page-header">
                <Container maxWidth={false}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <MainMenu />
                        </Grid>
                        <Grid item xs="auto">
                            <ProfileMenu />
                        </Grid>
                    </Grid>
                </Container>
            </header>
            <main className="app-page-main">
                <Container maxWidth={false}>
                    <Outlet />
                </Container>
            </main>
        </div>
    )
}

export default AdminLayout