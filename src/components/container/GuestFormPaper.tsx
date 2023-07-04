import React from "react";
import { Paper } from "@mui/material";

type GuestFormPaperProps = {
    children: React.ReactNode;
}

const stylesSx = {
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '2px solid var(--border-color-primary)',
        padding: '40px 20px',
        minHeight: '50vh',
        boxShadow: 'none'
    }
}

const GuestFormPaper = (props: GuestFormPaperProps): React.ReactElement => {
    return (
        <Paper sx={stylesSx.paper}>
            {props.children}
        </Paper>
    )
}

export default GuestFormPaper