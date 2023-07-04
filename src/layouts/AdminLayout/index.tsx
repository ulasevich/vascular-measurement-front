import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import ProfileMenu from '@components/navigation/ProfileMenu';
import MainMenu from '@components/navigation/MainMenu';


const AdminLayout = () => {
    return (
        <div className="app-page app-page--admin">
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