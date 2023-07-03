import React from "react";
import { 
    Paper,
    InputBase, 
    IconButton,
    Divider
} from "@mui/material";
import {
    FilterAltOutlined,
    Search,
    FileDownloadOutlined
} from '@mui/icons-material';

const stylesSx = {
    paper: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 15px',
        border: '1px solid var(--border-color-primary)',
        marginBottom: '20px',
        boxShadow: 'none',
        borderRadius: '6px'
    },
    input: {
        flex: 1
    },
    divider: {
        margin: 1
    }
}

const TableSearchForm = (): React.ReactElement => {
    return (
        <Paper sx={stylesSx.paper}>
            <InputBase
                placeholder="Поиск по"
                sx={stylesSx.input}
            />
            <IconButton type="button">
                <Search />
            </IconButton>
            <Divider 
                orientation="vertical" 
                flexItem 
                sx={stylesSx.divider}
            />
            <IconButton type="button">
                <FilterAltOutlined />
            </IconButton>
            <IconButton type="button">
                <FileDownloadOutlined />
            </IconButton>
        </Paper> 
    )
}

export default TableSearchForm

