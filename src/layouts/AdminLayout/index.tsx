import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';


const AdminLayout = () => {
    return (
        <div className="app-page">
            <header className="app-page-header">
                <Container maxWidth={false}>
                    <Grid container>
                        <Grid item xs>
                            <div className="app-main-menu">
                                <NavLink to="patients">Реестр пациентов</NavLink>
                                <NavLink to="administration">Администрировние</NavLink>
                                <NavLink to="settings">Настройки</NavLink>
                            </div>
                        </Grid>
                        <Grid xs="auto">
                            Admin
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