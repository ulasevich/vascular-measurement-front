import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
    return (
        <div className='page'>
            <header>
                <div className='main-container' style={{backgroundColor: 'gray', padding: 20}}>
                    Шапка GuestLayout
                </div>
            </header>
            <main>
                <div className='main-container'>
                    <Outlet />
                </div>
            </main>
            <footer>GuestLayout footer</footer>
        </div>
    )
}

export default GuestLayout