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

const TableSearchForm = (): React.ReactElement => {
    return (
        <Paper
            className="app-page-search-paper"
        >
            <InputBase
                placeholder="Поиск по"
                className="app-page-search-paper__input"
            />
            <IconButton type="button">
                <Search />
            </IconButton>
            <Divider 
                orientation="vertical" 
                flexItem 
                sx={{m: 1}}
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

