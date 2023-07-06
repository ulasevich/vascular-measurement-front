import React, { useState } from 'react';
import {
    Button, 
    ListItemIcon, 
    ListItemText, 
    Menu, 
    MenuItem 
} from "@mui/material";
import {
    KeyboardArrowDown,
    Logout,
    AccountCircle
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const ProfileMenu = () => {
    const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
    const profileMenuIsOpen = Boolean(profileMenuAnchorEl);
    const navigate = useNavigate();

    const handleProfileMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setProfileMenuAnchorEl(event.currentTarget);
    };
    const handleProfileMenuClose = () => {
        setProfileMenuAnchorEl(null);
    };
    const handleProfileMenuLogOut = () => {
        navigate('/');
    };

    return (
        <>
            <Button
                variant="text"
                color="secondary"
                endIcon={<KeyboardArrowDown />}
                onClick={handleProfileMenuClick}
            >
                Александр (admin)
            </Button>
            <Menu
                anchorEl={profileMenuAnchorEl}
                open={profileMenuIsOpen}
                onClose={handleProfileMenuClose}
                disableScrollLock={true}
            >
                <MenuItem onClick={handleProfileMenuClose}>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Мой профиль</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleProfileMenuLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Выйти</ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}

export default ProfileMenu