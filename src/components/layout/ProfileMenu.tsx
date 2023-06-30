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


const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                variant="text"
                color="secondary"
                endIcon={<KeyboardArrowDown />}
                onClick={handleClick}
            >
                Александр (admin)
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Мой профиль</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
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