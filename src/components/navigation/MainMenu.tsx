import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <div className="app-main-menu">
            <NavLink to="patients">Реестр пациентов</NavLink>
            <NavLink to="administration">Администрировние</NavLink>
            <NavLink to="settings">Настройки</NavLink>
        </div>
    )
}

export default MainMenu