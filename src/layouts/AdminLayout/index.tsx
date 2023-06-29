import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className='page'>
            <header>
                <div className='main-container' style={{backgroundColor: '#d5d5d5', padding: 30}}>
                    Шапка AdminLayout
                    <Link to="patients">Реестр пациентов</Link>
                    <Link to="administration">Администрировние</Link>
                    <Link to="settings">Настройки</Link>
                </div>
            </header>
            <main>
                <div className='main-container'>
                    <Outlet />
                </div>
            </main>
            <footer>AdminLayout footer</footer>
        </div>
    )
}

export default AdminLayout