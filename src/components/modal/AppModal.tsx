import React, { useState } from "react";
import { 
    Dialog, 
    DialogContent, 
    DialogTitle 
} from "@mui/material";
import { DialogProps } from '@mui/material/Dialog';


type AppModalProps = {
    title: string;
    children: React.ReactNode,
    open: boolean,
    maxWidth?: DialogProps['maxWidth'],
    handleModalopen: (open: boolean) => void;
}

const AppModal = (props: AppModalProps) => {

    return (
        <Dialog 
            open={props.open}
            onClose={()=>props.handleModalopen(false)}
        >
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                {props.children}
            </DialogContent>
        </Dialog>
    )
}

export default AppModal